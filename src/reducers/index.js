import { combineReducers } from 'redux';
import { storeMoviesReducer} from './storeMoviesReducer';

export const rootReducer = combineReducers({
    movies: storeMoviesReducer
})