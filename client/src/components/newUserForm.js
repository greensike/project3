import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Redirect} from 'react-router-dom'





class newUserForm extends Component {
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
        const payload = {
            name: this.state.name,
        }
        axios.post(`/api/user`, payload).then((res)=> {
            // this.props.getUsers()
            console.log(res)
            this.setState({redirect: true})
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={`/`}/>
        }
        return (
        <div>
            <p> New User </p>
            <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default newUserForm