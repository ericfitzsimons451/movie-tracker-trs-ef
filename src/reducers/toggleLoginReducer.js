export const toggleLoginReducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return state.loggedIn
    default: 
      return state
  }
}