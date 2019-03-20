export const storeMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_MOVIES':
            return action.movies
        default:
            return state;
    }
} 
