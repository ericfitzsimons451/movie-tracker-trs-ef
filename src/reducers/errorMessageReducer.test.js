import { errorMessageReducer } from '../reducers/errorMessageReducer'
import * as actions from '../actions'

describe('errorMessageReducer', () => {
    it('should return default state when there is no type', () => {
        const initialState = ''
        const action = {}
        const result = errorMessageReducer(initialState, action)
        expect(result).toEqual(initialState)
    })

    it('should return an error message when the type is SET_ERROR_MESSAGE', () => {
        const initialState = ''
        const action = {type: 'SET_ERROR_MESSAGE', message: 'This is the error message!'}
        const result = errorMessageReducer(initialState, action)
        expect(result).toEqual(action.message)
    })
})