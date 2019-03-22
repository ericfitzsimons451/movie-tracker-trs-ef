import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { toggleLoginReducer } from './toggleLoginReducer'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer,
    loggedIn: toggleLoginReducer,
})