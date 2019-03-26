import React from 'react'
import './Nav.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { loginUser, setLoginError } from '../../actions'

const Nav = (props) => {

    const signOut = (e) => {
        const data = {
            name: '',
            email: '',
        }
        props.loginUser(data)
    }

    const validateLogin = async (e) => {
        const { history } = props
        if (!props.user.email) {
            props.setLoginError('You must be signed in to view favorites')
            history.push('/login')
        } else {
            await history.push('/favorites')
        }
    }
        
    let welcomeMessage;
    let authLink;
    if (!props.user.email) {
        authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
    } else {
        welcomeMessage = <h3 className="welcome">Welcome, {props.user.name}!</h3>     
        authLink = <NavLink to='/' className='nav-link' onClick={signOut}>Sign Out</NavLink>
    }

    return (
        <div className="nav-container">
            <NavLink to='/' className="nav-link">Movies</NavLink>
            <button type='submit' className='nav-btn' onClick={validateLogin}>Favorites</button>
            {authLink}
            {welcomeMessage}
        </div>
    )
}
export const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites,
    movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data)),
    setLoginError: (message) => dispatch(setLoginError(message)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))

Nav.propTypes = {
    user: PropTypes.object,
    favorites: PropTypes.array,
    dispatch: PropTypes.func,
}