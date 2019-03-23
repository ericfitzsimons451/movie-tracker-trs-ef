import React, { Component } from 'react'
import './Nav.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'



class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }

    render = () => {
        let welcomeMessage;
        let authLink;
        if (!this.props.user.email) {
            authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
        } else {
            welcomeMessage = <h3 className="nav-link">Welcome, {this.props.user.name}!</h3>     
            authLink = <NavLink to='/' className='nav-link'>Sign Out</NavLink>
        }


    return (
        <div className="nav-container">
            {welcomeMessage}
            <NavLink to='/' className="nav-link">Show Movies</NavLink>
            <NavLink to='/favorites' className="nav-link">Show Favorites</NavLink>
            {authLink}
        </div>
    )
    }
}
export const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Nav)

Nav.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func
}