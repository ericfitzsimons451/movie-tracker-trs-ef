import { errorMessageReducer } from '../reducers/errorMessageReducer'

describe.skip('errorMessageReducer', () => {
    it('should return default state when there is no type', () => {
        const initialState = ''
        const action = {}
        const result = errorMessageReducer(initialState, action)
        expect(result).toEqual(initialState)
    })

    it('should return an error message when the type is SET_ LOGIN_ERROR', () => {
        const initialState = ''
        const action = {type: 'SET_LOGIN_ERROR', message: 'This is the error message!'}
        const result = errorMessageReducer(initialState, action)
        expect(result).toEqual(action.message)
    })
})