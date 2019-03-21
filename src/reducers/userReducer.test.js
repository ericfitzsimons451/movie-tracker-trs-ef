import { userReducer } from './userReducer'
import * as actions from '../actions'

describe('userReducer', () => {
    it('should return state as a default', () => {
        const initialState = {}
        const mockUserData = {
            email: 'asdf@as;ldkf.com',
            password: 123344
        }
        const action = {}
        const result = userReducer(initialState, action)
        expect(result).toEqual(initialState)
    })

    it('should return an object with all user data if the type is LOGIN_USER', () => {
        const initialState = {}
        const mockUserData = {
            email: 'asdf@asdf.com',
            password: 43221,
        }
        const action = actions.loginUser(mockUserData)
        const expected = {
            email: 'asdf@asdf.com',
            password: 43221,
        }
        const result = userReducer(initialState, action)
        expect(result).toEqual(expected)

    })
})