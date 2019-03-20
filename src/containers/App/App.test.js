
import { App, mapDispatchToProps } from './App'
import { storeMovies } from '../../actions'

describe('App', () => {
    describe('App', () => {
        //Async, snapshots, etc
    })
    
    describe('mapDispatchToProps', () => {
        it('should call dispatch with storeMovies action creator and an array of movies', () => {
            //setup
            const mockDispatch = jest.fn()
            const mockMovies = [{title: 'Aquaman'}, {title: 'Triple Frontier'}]
            const actionToDispatch = storeMovies(mockMovies)
            const mappedProps = mapDispatchToProps(mockDispatch)

            //execution
            mappedProps.storeMovies(mockMovies)

            //expectation
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})