export const storeMovies = (movies) => ({
    type: 'STORE_MOVIES',
    movies
})

export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    userData,
    loggedIn: true
})

export const toggleLogin = () => ({
    type: 'TOGGLE_LOGIN',
    loggedIn: false
})
