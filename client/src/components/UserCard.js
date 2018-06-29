import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UserBox= styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap:wrap;
`
const Image = styled.img`
margin: 20px;
`

class UserCard extends Component {
  render () {
    return (
        <UserBox>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" width="100" alt="random person"/>
            {this.props.user.name}
        </UserBox>
    )
  }
}

export default UserCard