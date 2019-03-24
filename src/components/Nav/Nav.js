import React, { Component } from 'react'
import './Nav.scss'
import { NavLink, Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { loginUser, setErrorMessage } from '../../actions'
import allPurposeFetch from '../../allPurposeFetch';
import Login from '../../containers/Login/Login'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }

    signOut = (e) => {
        const data = {
            name: '',
            email: '',
        }
        this.props.loginUser(data)
    }

    validateLogin = async (e) => {
        const { history } = this.props
        if (!this.props.user.email) {
            this.props.setErrorMessage('You must be signed in to view favorites')
            history.push('/login')
        } else {
            await this.fetchFavoriteMovies()
            await history.push('/favorites')
        }
    }

    fetchFavoriteMovies = async () => {
        const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
        const favorites = await allPurposeFetch(url)
        this.displayFavorites(favorites.data)
    }

    

    render = () => {
        let welcomeMessage;
        let authLink;
        if (!this.props.user.email) {
            authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
        } else {
            welcomeMessage = <h3 className="nav-link">Welcome, {this.props.user.name}!</h3>     
            authLink = <NavLink to='/' className='nav-link' onClick={this.signOut}>Sign Out</NavLink>
        }


    return (
        <div className="nav-container">
            <NavLink to='/' className="nav-link">Movies</NavLink>
            <button type='submit' className='nav-link' onClick={this.validateLogin}>Favorites</button>
            {authLink}
            {welcomeMessage}
        </div>
    )
    }
}
export const mapStateToProps = (state) => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data)),
    setErrorMessage: (message) => dispatch(setErrorMessage(message))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))

Nav.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func,
}