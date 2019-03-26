import { allUsersReducer } from '../reducers/allUsersReducer'
import * as actions from '../actions'

describe('allUsersReducer', () => {
    it('should return default state is there is no action.type', () => {
        const initialState = []
        const action = {}
        const result = allUsersReducer(initialState, action)
        expect(result).toEqual(initialState)
    })

    it('should return an array of user email addresses when action.type is STORE_USERS', () => {
        const initialState = []
        const mockUsers = [{
                id: 10, 
                name: "Eric", 
                email: "igotobedearly@gmail.com"
            }, {   
                id: 11, 
                name: "a", 
                email: "i@gmail.com"
            }, {
                id: 12, 
                name: "Kate Connors", 
                email: "kate.connors@gmail.com"
            }]
        const expected = [{
            id: 10, 
            name: "Eric", 
            email: "igotobedearly@gmail.com"
        }, {   
            id: 11, 
            name: "a", 
            email: "i@gmail.com"
        }, {
            id: 12, 
            name: "Kate Connors", 
            email: "kate.connors@gmail.com"
        }]
        const action = {type: 'STORE_USERS', allUsers: mockUsers}
        const result = allUsersReducer(initialState, action)
        expect(result).toEqual(expected)
    })
})