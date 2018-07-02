import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import axios from 'axios'

const UserBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: solid;
color: black;
flex-wrap:wrap;
margin: 5%;
`
const Image = styled.img`
margin: 20px;
`

class UserCard extends Component {
  render() {
    return (
      <Link to={`user/${this.props.id}`}>
        <UserBox>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" width="100" alt="random person" />
          <p>{this.props.user.name}</p>
        </UserBox>
      </Link>
    )
  }
}

export default UserCard