import { AllMovies, mapStateToProps } from './AllMovies'

describe('AllMovies', () => {
    describe('AllMovies', () => {
    //it . . . 
    })
    describe('mapStateToProps', () => {
        it('should pass a movies array as props from the store to the container', () => {
            //setup
            const mockMovies = [{title: 'Aquaman'}, {title: 'Triple Frontier'}]
            const mockState = {movies: mockMovies, dummy: 'dummy'}
            const expected = {movies: mockMovies}

            //execution
            const mappedProps = mapStateToProps(mockState)

            //expectation
            expect(mappedProps).toEqual(expected)
        })
    })
})