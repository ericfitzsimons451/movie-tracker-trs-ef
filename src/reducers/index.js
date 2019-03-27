import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { userReducer } from "./userReducer";
import { allUsersReducer } from "./allUsersReducer";
import { errorMessageReducer } from "./errorMessageReducer";
import { favoritesReducer } from "./favoritesReducer";
import { currMovieReducer } from "./currMovieReducer"

export const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    message: errorMessageReducer,
    favorites: favoritesReducer,
    currMovie: currMovieReducer
})

