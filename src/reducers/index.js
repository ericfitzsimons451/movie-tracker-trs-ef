import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { allUsersReducer } from './allUsersReducer'
import { errorMessageReducer } from './errorMessageReducer'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    message: errorMessageReducer
})