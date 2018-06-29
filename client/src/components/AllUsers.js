import React, { Component } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import styled from 'styled-components'

const AllUsersBox = styled.div`
display: flex;
flex-wrap:wrap;
`

class AllUsers extends Component {
    state = {
        users: []
    }
    getUsers = () => {
        axios.get('/api/user').then(response => {
            console.log(response.data)
            this.setState({users: response.data})
        })
    }
    componentDidMount(){
        this.getUsers()
    }
  render () {
      const listOfUsers = this.state.users.map((user,index) => {
          return (<UserCard key={index} user={user}/>)
      })
    return (
        <div>
          <h1>all users</h1>
          <AllUsersBox>{listOfUsers}</AllUsersBox>
          
        </div>
      
    )
  }
}

export default AllUsers