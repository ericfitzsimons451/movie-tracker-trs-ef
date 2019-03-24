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

// export const addFavorite = (movieID) => ({
//     // This posts favorites to backend
//     type: 'ADD_FAVORITE',
//     movieID
// })

export const displayFavorites = (favorites) => ({
    type: 'DISPLAY_FAVORITES',
    favorites
})

export const setErrorMessage = (message) => ({
    type: 'SET_ERROR_MESSAGE',
    message
})

