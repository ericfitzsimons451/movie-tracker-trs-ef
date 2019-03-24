export const favoritesReducer = (state=[], action) => {
  switch (action.type) {
      case 'DISPLAY_FAVORITES':
          return action.favorites
      default: 
          return state
  }
  
}