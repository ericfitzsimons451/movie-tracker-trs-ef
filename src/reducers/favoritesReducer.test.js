import { favoritesReducer } from '../reducers/favoritesReducer'

describe('favoritesReducer', () => {
    it('should return default state when there is no action.type', () => {
        const initialState = []
        const action = {}
        const result = favoritesReducer(initialState, action)
        expect(result).toEqual(initialState)
    })

    it('should return an array of favorites when action.type is STORE_FAVORITES', () => {
        const initialState = []
        const mockFavorites = [{
            id: 166428,
            name: "How to Train Your Dragon: The Hidden World",
            overview: "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
            poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            release_date: "2019-01-03",
            vote_average: 7.8
        }, {
            id: 299537, 
            name: "Captain Marvel", 
            overview: "This is a story about a superhero.",
            poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
            release_date: "2019-03-06", 
            vote_average: 7.3
        }]
        const action = {type: 'STORE_FAVORITES', favorites: mockFavorites}
        const results = favoritesReducer(initialState, action)
        expect(results).toEqual(mockFavorites)
    })

    it('should return an array of favorites when action.type is STORE_FAVORITES', () => {
        const initialState = [];
        const mockNewFavorite = {
            id: 299537, 
            name: "Captain Marvel", 
            overview: "This is a story about a superhero.",
            poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
            release_date: "2019-03-06", 
            vote_average: 7.3
        }
        const action = {type: 'STORE_NEW_FAVORITE', newFavorite: mockNewFavorite}
        const results = favoritesReducer(initialState, action)
        expect(results).toEqual([mockNewFavorite])
    })

    it('should return an smaller array of favorites when action.type is REMOVE_FAVORITE_FROM_STORE', () => {
        const initialState = [{
            id: 166428,
            name: "How to Train Your Dragon: The Hidden World",
            overview: "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
            poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            release_date: "2019-01-03",
            vote_average: 7.8
        }, {
            id: 299537, 
            name: "Captain Marvel", 
            overview: "This is a story about a superhero.",
            poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
            release_date: "2019-03-06", 
            vote_average: 7.3
        }];
        const mockIndex = 0;
        const action = {type: 'REMOVE_FAVORITE_FROM_STORE', index: mockIndex}
        const expected = [{
            id: 299537, 
            name: "Captain Marvel", 
            overview: "This is a story about a superhero.",
            poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
            release_date: "2019-03-06", 
            vote_average: 7.3
        }]
        const results = favoritesReducer(initialState, action)
        expect(results).toEqual(expected)
    })
})