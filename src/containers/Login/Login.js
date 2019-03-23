import React, { Component } from 'react'
import './Login.scss'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cleanUser } from '../../helpers/cleanUser'
import { Route, Redirect } from 'react-router-dom'
import CreateNewUser from '../CreateNewUser/CreateNewUser'

export class Login extends Component {
    constructor(props) {
        super(props)
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
        } catch (error) {
            this.setState({
                errorMsg: 'User not found, check your email and password'
            })
            alert(this.state.errorMsg)
            //should we refresh the page or redirect to the sign in ????
        }
        this.setState({email: '', password: ''})
    }

    render() {
        if (this.props.user.id) {
            return <Redirect to='/' />
        } else {

            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Sign In</h2>
                        <input onChange={this.handleChange} name="email" value={this.state.email} />
                        <input onChange={this.handleChange} name="password" value={this.state.password} />
                        <NavLink to='/' type='submit' onClick={this.handleSubmit}>Submit</NavLink>
                        <NavLink to='/login/newUser'>Create New User Account</NavLink>
                    </form>
                    <Route exact path='/login/newUser' render={ () => <CreateNewUser />} />
                </div>   
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)