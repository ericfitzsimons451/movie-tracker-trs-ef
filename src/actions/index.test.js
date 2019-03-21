import * as actions from './index'

describe('storeMovies', () => {
    it('should take in an array of movies and return an object with type STORE_MOVIES', () => {
        //setup
        const mockMovies = [{title: 'Aquaman'}, {title: 'Triple Frontier'}]
        const expected = {type: 'STORE_MOVIES', movies: mockMovies}
        //execution
        const result = actions.storeMovies(mockMovies)
        //expectation
        expect(result).toEqual(expected)
    })
})

describe('loginUser', () => {
    it('should take in a user object and return an object with type: LOGIN_USER', () => {
        const mockUserData = {
            email: 'asdlfkj@a;sldkjf',
            password: 12345
        }
        const expected = {type: 'LOGIN_USER', userData: mockUserData}
        const results = actions.loginUser(mockUserData)
        expect(results).toEqual(expected)
    })
})