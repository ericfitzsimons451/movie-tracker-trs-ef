export const favoritesReducer = (state=[], action) => {
    switch (action.type) {
        case 'STORE_FAVORITES':
            return action.favorites;
        case 'STORE_NEW_FAVORITE':
            return [...state, action.newFavorite];
        case 'REMOVE_FAVORITE_FROM_STORE':
            state.splice(action.index, 1)
            return state;
        default: 
            return state
    }
}

