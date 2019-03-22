import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
    console.log(props)
    let authLink; 
    if (!props.user.user) {
            authLink= <NavLink to='/login' className='nav-link'>Sign In</NavLink>
        } else {
            authLink = <NavLink to='/' className='nav-link'>Sign Out</NavLink>
        }

    return (
        <div className="nav-container">
            <NavLink to='/' className="nav-link">Show Movies</NavLink>
            <NavLink to='/favorites' className="nav-link">Show Favorites</NavLink>
            {authLink}
        </div>
    )
}
export const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Nav)