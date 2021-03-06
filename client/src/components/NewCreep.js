import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'





class NewCreep extends Component {
    state = {
        user: [],
        name: '',
        photo: '',
        address: '',
        description: '',
        crime: '',
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
      
        axios.post(`/api/user/${userId}/creep`, this.state).then((res) => {
            console.log(res)
            this.setState({ redirect: true })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/user/${this.props.match.params.id}`} />
        }
        return (
            <div>
                <p> New Creep </p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                    <label htmlFor="photo">Photo: </label>
                    <input onChange={this.handleChange} type="text" name="photo" value={this.state.photo} />
                    <label htmlFor="address">Address: </label>
                    <input onChange={this.handleChange} type="text" name="address" value={this.state.address} />
                    <label htmlFor="description">Description: </label>
                    <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                    <label htmlFor="crime">Crime: </label>
                    <input onChange={this.handleChange} type="text" name="crime" value={this.state.crime} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewCreep