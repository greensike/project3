import React, { Component } from 'react'
import styled from 'styled-components'
// import axios from 'axios'



class newUserForm extends Component {
    state = {
        name: '',
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
      }

      handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
          name: this.state.name,
        }
        await axios.post('/api/creatures', payload)
        await this.props.getAllCreatures()
      }

  render () {
    return (
        <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAqGb0QIt3yo3iMmJS3OP62R3kyI9y4-Ow7RBR_t2rNLDyjMK" width="100" alt="random person"/>
            {this.props.user.name}
        </div>
    )
  }
}

export default newUserForm