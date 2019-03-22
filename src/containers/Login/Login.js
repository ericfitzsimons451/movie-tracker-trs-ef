import React, { Component } from 'react'
import './Login.scss'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cleanUser } from '../../helpers/cleanUser'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password:'',
            errorMsg: '',
            isAuthenticated: false,
            newUserName: '',
            newUserEmail: '',
            newUserPassword: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email, 
                password: this.state.password, 
            }),
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        const user = await response.json()
        const cleanedUser = cleanUser(user)
        this.props.loginUser(cleanedUser)
        this.setState({email: '', password: ''})
        } catch (error) {
            this.setState({
                errorMsg: 'User not found, check your email and password'
            })
            alert(this.state.errorMsg)
        }
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
            const newUser = await response.json()
            this.setState({newUserName: '', newUserEmail: '', newUserPassword: ''})
        } catch (error) {
            this.setState({
                errorMsg: 'Error creating new user.'
            })
            alert(this.state.errorMsg)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="email" value={this.state.email} />
                    <input onChange={this.handleChange} name="password" value={this.state.password} />
                    <NavLink to='/' type='submit' onClick={this.handleSubmit}>Login</NavLink>
                </form>
                <form onSubmit={this.createNewUser}>
                    Name:<input onChange={this.handleChange} name="newUserName" value={this.state.newUserName} />
                    Email:<input onChange={this.handleChange} name="newUserEmail" value={this.state.newUserEmail} />
                    Password:<input onChange={this.handleChange} name="newUserPassword" value={this.state.newUserPassword} />
                    <button>Sign up!</button>
                </form>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(Login)