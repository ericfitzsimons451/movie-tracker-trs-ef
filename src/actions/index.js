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

export const storeFavorites = (favorites) => ({
    type: 'STORE_FAVORITES',
    favorites
})

export const setErrorMessage = (message) => ({
    type: 'SET_ERROR_MESSAGE',
    message
})

