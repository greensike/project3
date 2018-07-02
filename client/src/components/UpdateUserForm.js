import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'





class updateUserForm extends Component {
    state = {
        name: '',
        redirect: false
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.id
      
        axios.put(`/api/user/${userId}`, this.state).then((res) => {
            console.log(res)
            this.setState({ redirect: true })
        })
    }

    render() {
        console.log("is this happening")
        if (this.state.redirect) {
            return <Redirect to={`/user/${this.props.match.params.id}`} />
        }
        return (
            <div>
                <p> Edit user </p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default updateUserForm