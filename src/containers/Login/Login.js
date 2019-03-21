import React, { Component } from 'react'
import './Login.scss'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:''
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
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        const user = await response.json()
        this.props.loginUser(user.data)
        this.setState({email: '', password: ''})
        } catch (error) {
            throw new Error(error.message)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" value={this.state.email} />
                <input onChange={this.handleChange} name="password" value={this.state.password} />
                <button type='submit'>Login</button>
            </form>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(Login)