import React from 'react'

const Header = () => {

    const routeToLoginPage = () => {
        // this.history.push('/login')
        //after importing Router, possibly in app, then passed down
        //we need to use the history function to route us to the login
        //   Going to use withRouter from 'react-router-dom'
        //  find a way to pull in that router, export with router
    }

    return (
        <div>
            <h1>Luke Sperry's Movie Trrrrrrrrrracker</h1>
            {/* <button onClick={routeToLoginPage}>Login</button> */}
        </div>
    )
}

export default Header