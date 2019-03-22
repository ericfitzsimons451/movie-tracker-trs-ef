import React from 'react'
import { withRouter } from 'react-router-dom'

const user = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true,
        setTimeout(cb, 100)
    },
    signOut(cb) {
        this.isAuthenticated = false,
        setTimeout(cb, 100)
    }
}

