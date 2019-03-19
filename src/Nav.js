import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to='/' className="movies-link">Show Movies</NavLink>
            <NavLink to='/favorites' className="favorites-link">Show Favorites</NavLink>
        </div>
    )
}

export default Nav