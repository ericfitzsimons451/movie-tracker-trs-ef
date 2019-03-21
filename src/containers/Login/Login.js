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
            email: '',
            password:'',
            id: 10,
            errorMsg: '',
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
            body: JSON.stringify({email: this.state.email, password: this.state.password, id: this.state.id}),
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" value={this.state.email} />
                <input onChange={this.handleChange} name="password" value={this.state.password} />
                <NavLink to='/' type='submit' onClick={this.handleSubmit}>Login</NavLink>
            </form>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(Login)