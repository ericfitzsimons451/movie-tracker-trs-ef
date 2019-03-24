import React, { Component } from 'react'
import './Nav.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { loginUser } from '../../actions'



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
            <NavLink to='/favorites' className="nav-link">Favorites</NavLink>
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
    loginUser: (data) => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

Nav.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func
}