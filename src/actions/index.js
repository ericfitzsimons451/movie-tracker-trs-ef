export const storeMovies = (movies) => ({
    type: 'STORE_MOVIES',
    movies
})

export const storeUsers = (allUsers) => ({
    type: 'STORE_USERS',
    allUsers
})

export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    userData
})

// export const toggleLogin = () => ({
//     type: 'TOGGLE_LOGIN',
//     loggedIn: false
// })
