import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserCard from './UserCard'

const Image = styled.img`
margin: 20px;
`

class UserAndCreep extends Component {
    state = {
        users: [],
        creeps: []
    }
    getCreeps = () => {
        axios.get('/:id').then(response => {
            console.log(response.data)
            this.setState({creeps: response.data})
        })
    }
    getUsers = () => {
        axios.get('/:id').then(response => {
            console.log(response.data)
            this.setState({users: response.data})
            this.setState({creeps: response.data})
        })
    }
    componentDidMount(){
        this.getUsers()
        this.getCreeps()
    }
    render () {
        const user = this.state.users.map((user,index) => {
            return (<UserCard key={index} user={user}/>)
   }) 
    return (
        <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" width="100" alt="random person"/>
            {this.props.user.name}
            {this.props.user.name}
        </div>
    )
  }
}

export default UserAndCreep