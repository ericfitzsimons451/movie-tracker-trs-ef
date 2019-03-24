export const allUsersReducer = (state=[], action) => {
  switch (action.type) {
      case 'STORE_USERS':
          return action.allUsers
      default: 
          return state
  }
}
