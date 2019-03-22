import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
    console.log(props)
    let authLink; 
    if (!props.user.user) {
            authLink= <NavLink to='/login'>Sign In</NavLink>
        } else {
            authLink = <NavLink to='/'>Sign Out</NavLink>
        }

    return (
        <div className="nav-container">
            <NavLink to='/' className="movies-link">Show Movies</NavLink>
            <NavLink to='/favorites' className="favorites-link">Show Favorites</NavLink>
            {authLink}
        </div>
    )
}
export const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Nav)