import React, { Component } from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

const UserBox= styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap:wrap;
`
const Image = styled.img`
margin: 20px;
`

class CreepCard extends Component {
  render () {
    return (
        <UserBox>
            <Image src="https://i.pinimg.com/originals/72/df/3b/72df3bf5bdf3cc47bd4d7c479a2c606c.jpg" width="100" alt="random person"/>
            {this.props.user.creep.name}
        </UserBox>
    )
  }
}

export default CreepCard