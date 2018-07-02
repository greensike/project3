import React, { Component } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
          return (<UserCard key={index} user={user} id={user._id}/>)
      })
    return (
        <div>
          <h1>All Informers</h1>
          <AllUsersBox>{listOfUsers}</AllUsersBox>
          <Link className="link" to="/user/new">Add New Informer</Link>
        </div>
      
    )
  }
}

export default AllUsers