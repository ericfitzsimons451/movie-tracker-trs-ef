import React, { Component } from 'react'
import './Nav.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'




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
        let authLink;
        if (typeof this.props.user.id !== "number") {
            authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
        } else {
            authLink = <NavLink to='/movies' className='nav-link'>Sign Out</NavLink>
        }

    return (
        <div className="nav-container">
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