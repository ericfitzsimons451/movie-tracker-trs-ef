import React from 'react'
import './Header.scss'
import './Header'

const Header = () => {

    const routeToLoginPage = () => {
        // this.history.push('/login')
        //after importing Router, possibly in app, then passed down
        //we need to use the history function to route us to the login
        //   Going to use withRouter from 'react-router-dom'
        //  find a way to pull in that router, export with router
    }

    return (
        <div className="logo">
           
                <h1>MOVIE TRACKER</h1>
           
            {/* <button onClick={routeToLoginPage}>Login</button> */}
        </div>
    )
}

export default Header