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