import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'


const Image = styled.img`
margin: 20px;
`
const AllUsersBox = styled.div`
display: flex;
flex-wrap:wrap;
`

class UserAndCreep extends Component {
    state = {
        user: {
            creep: []
        }
    }


deleteUser = () => {
    const userId = this.props.match.params.id
    //make a delete request to our copy of the api using the params to identify specific idea
    axios.delete(`/api/user/${userId}`).then((res) => {
    this.getUsers(userId)
    
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

        return (
            <div>
                <div>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" width="100" alt="random person" />
                    {this.state.user.name}
                    <button onClick={this.deleteUser}>Delete User</button>
                </div>
                {this.state.user.creep.map((creep, i) => {
                    return (
                        <div key={i}>
                            {/* <img src="creep.photo" alt=""/> */}
                            <p>{creep.name}</p>
                            <p>{creep.age}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserAndCreep