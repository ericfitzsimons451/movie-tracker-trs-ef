export const errorMessageReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_LOGIN_ERROR':
            return action.message
        default:
            return state
    }
}