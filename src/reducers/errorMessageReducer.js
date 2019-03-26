export const errorMessageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return action.message;
    default:
      return state;
  }
};
