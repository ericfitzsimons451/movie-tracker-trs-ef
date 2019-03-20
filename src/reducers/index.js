import { combineReducers } from 'redux';
import { storeMoviesReducer } from './storeMoviesReducer';
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    movies: storeMoviesReducer,
    user: userReducer
})