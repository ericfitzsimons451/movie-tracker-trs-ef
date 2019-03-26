import { toggleLoginReducer } from '../reducers/toggleLoginReducer'

describe('toggleLoginReducer', () => {
    it('should return default state when there is no action.type', () => {
        const initialState = {loggedIn: false}
        const action = {}
        const results = toggleLoginReducer(initialState, action)
        expect(results).toEqual(initialState)
    })

    it('should return a boolean that verifies login status when action.type is TOGGLE_LOGIN', () => {
        const initialState = {loggedIn: false}
        const action = {type: 'TOGGLE_LOGIN', loggedIn: false }
        const results = toggleLoginReducer(initialState, action)
        expect(results).toEqual(false)
    })
})