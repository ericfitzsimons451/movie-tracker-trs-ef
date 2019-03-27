import * as actions from "./index";
import { REFUSED } from "dns";

describe.skip("storeMovies", () => {
  it("should take in an array of movies and return an object with type STORE_MOVIES", () => {
    const mockMovies = [{ title: "Aquaman" }, { title: "Triple Frontier" }];
    const expected = { type: "STORE_MOVIES", movies: mockMovies };
    const result = actions.storeMovies(mockMovies);
    expect(result).toEqual(expected);
  });
});

describe('storeUsers', () => {
  it('should take in an array of user email addresses and return an object with type STORE_USERS', () => {
    const mockUsers = ['john@email.com', 'rick@email.com', 'lisa@email.com']
    const expected = { type: 'STORE_USERS', allUsers: mockUsers}
    const result = actions.storeUsers(mockUsers)
    expect(result).toEqual(expected)
  })
})

describe("loginUser", () => {
  it("should take in a user object and return an object with type: LOGIN_USER", () => {
    const mockUserData = {
      email: "asdlfkj@a;sldkjf",
      password: 12345
    };
    const expected = { type: "LOGIN_USER", userData: mockUserData };
    const results = actions.loginUser(mockUserData);
    expect(results).toEqual(expected);
  });

  describe('storeFavorites', () => {
    it('should take in an array of favorite movies and return an object with type: STORE_FAVORITES and an array of movie objects', () => {
      const mockMovies = 
      [
        {
          name: "How to Train Your Dragon: The Hidden World", 
          id: 166428, 
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg", 
          release_date: "2019-01-03",
          vote_average: 3
        },
      {
        name: "Captain Marvel", 
        id: 299537, 
        poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
        release_date: "2019-03-06", 
        vote_average: 7.3
      }, 
      {
        name: "The Mule", 
        id: 220349, 
        poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
        release_date: "2019-03-01", 
        vote_average: 7.4
      }
    ]
      const expected = {type: 'STORE_FAVORITES', favorites: mockMovies }
      const result = actions.storeFavorites(mockMovies)
      expect(result).toEqual(expected)
    })
  })

  describe('storeNewFavorite', () => {
    it('should take in a favoriteObeject and return an object with type:STORE_NEW_FAVORITE', ()=>{
      const newFavorite = {
        name: "The Mule", 
        id: 220349, 
        poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
        release_date: "2019-03-01", 
        vote_average: 7.4
      }
      const expected = {
        type: 'STORE_NEW_FAVORITE', 
        newFavorite: {
          name: "The Mule", 
          id: 220349, 
          poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", 
          release_date: "2019-03-01", 
          vote_average: 7.4
      }}
      const results = actions.storeNewFavorite(newFavorite)
      expect(results).toEqual(expected)
    })
  })

  describe('removeFavoriteFromStore', () => {
    it('should take in an index and return an object with type: REMOVE_FAVORITE_FROM_STORE', () => {
      const mockIndex = 1
      const expected = {
        type: 'REMOVE_FAVORITE_FROM_STORE',
        index: mockIndex
      }
      const results = actions.removeFavoriteFromStore(mockIndex)
      expect(results).toEqual(expected)
    })
  })

  describe('setLoginError', () => {
    it('should take in a message and return an object with type: SET_LOGIN_ERROR', () => {
      const mockMessage = 'Something went wrong'
      const expected = {
        type: 'SET_LOGIN_ERROR',
        message: mockMessage
      }
      const results = actions.setLoginError(mockMessage)
      expect(results).toEqual(expected)
    })
  })
});
