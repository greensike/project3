import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import NewCreep from './NewCreep';



const Image = styled.img`
    margin: 20px;
    height:100px;
    width:auto;
    margin-left: 40px;
`
const Image2 = styled.img`
    margin: 20px;
    height:200px;
    width:auto;
    margin-left: 40px;
`
const AllUsersBox = styled.div`
display: flex;
flex-wrap:wrap;
`

const div = styled.div`
margin-left: 20px;
`


class UserAndCreep extends Component {
    state = {
        redirect: false,
        user: {
            creep: [],
        }
    }


    deleteUser = () => {
        const userId = this.props.match.params.id
        axios.delete(`/api/user/${userId}`).then((res) => {
            // this.getUsers(userId)
            this.setState({ redirect: true })

        })

    }

    getUsers = () => {
        const userId = this.props.match.params.id

        axios.get(`/api/user/${userId}`).then(response => {
            this.setState({ user: response.data })
        })
    }

    componentDidMount() {
        this.getUsers()
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <div>
                    <h1> Informers </h1>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" alt="random person" />
                    <br/>
                    <h3>{this.state.user.name}</h3>
                    <br/>
                    <Link className="link" to={`/user/${this.props.match.params.id}/updateUserForm`}>Change the User's name</Link>
                    <br/>
                    <Link className="link" to={`/user/${this.props.match.params.id}/newCreep`}>Add New Creep</Link>
                    <br/>
                    <button onClick={this.deleteUser}>Delete User</button>
                </div>
                {this.state.user.creep.map((creep, i) => {
                    return (
                        <div key={i}>
                            <div>
                            <h3> Creep </h3>
                            <Image2 src={creep.photo} alt="" />
                            <p>{creep.name}</p>
                            <br/>
                            <p>{creep.address}</p>
                            <br/>
                            <p>{creep.description}</p>
                            <br/>
                            <p>{creep.crime}</p>
                        </div>
                        </div>
            )
        })}
            </div>
        )
    }
}

export default UserAndCreep