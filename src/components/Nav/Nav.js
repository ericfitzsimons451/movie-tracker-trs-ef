import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
    if (props.loggedIn === false) {
        return (
            <div>
                <NavLink to='/' className="movies-link">Show Movies</NavLink>
                <NavLink to='/favorites' className="favorites-link">Show Favorites</NavLink>
                <NavLink to='/login'>Sign In</NavLink>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/' className="movies-link">Show Movies</NavLink>
                <NavLink to='/favorites' className="favorites-link">Show Favorites</NavLink>
                <NavLink to='/'>Sign Out</NavLink>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Nav)