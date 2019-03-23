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

    // const Authlink = withRouter(
    //     ({ history }) => 
    //         this.isAuthenticated ? (
    //             <button>Sign Out</button>
    //         ) : (
    //             <button>Sign In</button>
    //         ))
    render = () => {
        let welcomeMessage;
        let authLink;
        if (typeof this.props.user.id !== "number") {
            authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
        } else {
            welcomeMessage = <h3 className="nav-link">Welcome, {this.props.user.name}!</h3>     
            authLink = <NavLink to='/movies' className='nav-link'>Sign Out</NavLink>
        }


    return (
        <div className="nav-container">
            {welcomeMessage}
            <NavLink to='/movies' className="nav-link">Show Movies</NavLink>
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