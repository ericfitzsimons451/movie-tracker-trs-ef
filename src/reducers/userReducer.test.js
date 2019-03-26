import { userReducer } from "./userReducer";

describe("userReducer", () => {
  it("should return default state if there is no action.type", () => {
    const initialState = {};
    const action = {};
    const results = userReducer(initialState, action);
    expect(results).toEqual(initialState);
  });

  it("should return an object with all user data if the type is LOGIN_USER", () => {
    const initialState = {};
    const action = {type: 'LOGIN_USER', userData: {
      email: "asdf@asdf.com",
      password: 43221}
    };
    const expected = {
      email: "asdf@asdf.com",
      password: 43221
    };
    const results = userReducer(initialState, action);
    expect(results).toEqual(expected);
  });
});
