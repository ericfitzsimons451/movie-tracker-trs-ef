export const userReducer = (state={}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {user: action.userData, loggedIn: true}
        default: 
            return state
    }
}
