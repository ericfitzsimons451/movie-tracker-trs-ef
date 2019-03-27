export const currMovieReducer = (state={}, action) => {
  switch(action.type) {
    case 'STORE_CURR_MOVIE':
      return action.currMovie;
    default:
      return state;
  }
}