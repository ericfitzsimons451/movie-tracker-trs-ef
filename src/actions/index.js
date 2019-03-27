export const storeMovies = movies => ({
  type: "STORE_MOVIES",
  movies
});

export const storeUsers = allUsers => ({
  type: "STORE_USERS",
  allUsers
});

export const loginUser = userData => ({
  type: "LOGIN_USER",
  userData
});

export const storeFavorites = (favorites) => ({
    type: 'STORE_FAVORITES',
    favorites
})

export const storeNewFavorite = (newFavorite) => ({
    type: 'STORE_NEW_FAVORITE',
    newFavorite
})

export const removeFavoriteFromStore = (index) => ({
    type: 'REMOVE_FAVORITE_FROM_STORE',
    index
})

export const storeCurrMovie = (currMovie) => ({
  type: 'STORE_CURR_MOVIE',
  currMovie
})

export const setLoginError = (message) => ({
    type: 'SET_LOGIN_ERROR',
    message
})
