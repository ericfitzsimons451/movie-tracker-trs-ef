import { moviesReducer } from './moviesReducer'
import * as actions from '../actions'

describe('moviesReducer', () => {
    it('should return initial state by default', () => {
        //setup
        const initialState = []
        const action = {}
        //execution
        const result = moviesReducer(initialState, action)
        //expectation 
        expect(result).toEqual(initialState)
    })

    it('should return an array of movies if action.type is STORE_MOVIES', () => {
        //setup
        const initialState = []
        const mockMovies = [{title: 'Aquaman'}, {title: 'Triple Frontier'}]
        const action = actions.storeMovies(mockMovies)

        //execution
        const result = moviesReducer(initialState, action)

        //expectation
        expect(result).toEqual(mockMovies)
    })
})