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
        await axios.post('/api/user', payload)
        await this.props.getUsers()
      }

  render () {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <button>Submit</button>
      </form>
        </div>
    )
  }
}

export default newUserForm