import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class CreateNewUser extends Component {
    constructor() {
        super()
        this.state = {
            newUserName: '',
            newUserEmail: '',
            newUserPassword: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    createNewUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/users/new', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.newUserName, 
                    email: this.state.newUserEmail, 
                    password: this.state.newUserPassword, 
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            this.setState({newUserName: '', newUserEmail: '', newUserPassword: ''})
        } catch (error) {
            this.setState({
                errorMsg: 'Error creating new user.'
            })
            alert(this.state.errorMsg)
        }
    }

    render() {
        return(
            <form onSubmit={this.createNewUser}>
                <h2>New Account Sign Up</h2>
                <input onChange={this.handleChange} name='newUserName' value={this.state.newUserName} />
                <input onChange={this.handleChange} name='newUserEmail' value={this.state.newUserEmail} />
                <input onChange={this.handleChange} name='newUserPassword' value={this.state.newUserPassword} />
                <button>Create New User</button>
            </form>
        )
    }
}

export const mapStateToProps = (state) => ({
    user: state.user
})

export default CreateNewUser