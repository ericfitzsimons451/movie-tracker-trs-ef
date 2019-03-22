export const userReducer = (state={}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(action.userData)
            return action.userData
        default: 
            return state
    }
    
}
