import React, { Component } from 'react'
import './Login.scss'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cleanUser } from '../../helpers/cleanUser'
import { Route, Redirect } from 'react-router-dom'
import CreateNewUser from '../CreateNewUser/CreateNewUser'
import { PropTypes } from 'prop-types'


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
            newUserPassword: '',
            createUser: false
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
                errorMsg: error.message.detail
            })
            alert(this.state.errorMsg)
            //should we refresh the page or redirect to the sign in ????
        }
        this.setState({email: '', password: ''})
    }

    updateState = () => {
        this.setState({
            createUser: true
        })
    }

    createNewUser = async (e) => {
        e.preventDefault()
        if (this.props.allUsers.includes(this.state.newUserEmail)) {
            this.setState({
                errorMsg: 'That email already exists'
            }, () => { alert(this.state.errorMsg) })
            
        } else {
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
            } catch (error) {
                this.setState({
                    errorMsg: error
                })
                alert(this.state.errorMsg)
            }
                this.loginNewUser()
        }
    }

    loginNewUser = () => {
        const data = {
            name: this.state.newUserName,
            email: this.state.newUserEmail,
        }
        this.props.loginUser(data)
    }

    render() {
        let feedback;
        let nameInput;
        let logMeIn; 
        let toggleForm;
        let emailInput;
        let passwordInput; 

        if (this.state.createUser === false) {
            feedback = <h3>Sign In Here</h3>
            emailInput = <input onChange={this.handleChange} name="email" type="email" value={this.state.email} />
            passwordInput = <input onChange={this.handleChange} name="password" type="password" value={this.state.password} />
            logMeIn = <NavLink to='/' type='submit' onClick={this.handleSubmit}>I have an account</NavLink>
            toggleForm = <NavLink to='/login' onClick={this.updateState}>I want to sign up</NavLink>
        } else if (this.state.createUser === true) {
            feedback = <h3>Create New Account</h3>
            nameInput = <input onChange={this.handleChange} name='newUserName' value={this.state.newUserName} />
            emailInput = <input onChange={this.handleChange} name="newUserEmail" type="email" value={this.state.newUserEmail} />
            passwordInput = <input onChange={this.handleChange} name="newUserPassword" type="password" value={this.state.newUserPassword} />
            logMeIn = <NavLink to='/' onClick={this.createNewUser}>Here's my info as a new user</NavLink>
        }

        if (this.props.user.email) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {feedback}
                        {nameInput}
                        {emailInput}
                        {passwordInput}
                        {logMeIn}
                        {toggleForm}
                        {this.state.errorMsg}
                    </form>
                </div>   
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    user: state.user,
    allUsers: state.allUsers
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

Login.propTypes = {
    loginUser: PropTypes.func,
    user: PropTypes.object
}