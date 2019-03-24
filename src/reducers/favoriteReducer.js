export const favoriteReducer = (state=[], action) => {
  switch (action.type) {
      case 'ADD_FAVORITE':
          return action.movieId
      default: 
          return state
  }
  
}