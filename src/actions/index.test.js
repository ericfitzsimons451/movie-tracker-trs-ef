import * as actions from "./index";

describe("storeMovies", () => {
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

    describe('setErrorMessage', () => {
      it('should take in and return an object with type SET_ERROR_MESSAGE and an error message', () => {
        const mockErrorMessage = 'You must be signed in to view favorites'
        const expected = { type: 'SET_ERROR_MESSAGE', message: mockErrorMessage }
        const result = actions.setErrorMessage(mockErrorMessage)
        expect(result).toEqual(expected)
      })
    })
});
