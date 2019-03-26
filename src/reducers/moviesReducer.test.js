import { moviesReducer } from "./moviesReducer";
import * as actions from "../actions";

describe("moviesReducer", () => {
  it("should return initial state by default", () => {
    const initialState = [];
    const action = {};
    const result = moviesReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it("should return an array of movies if action.type is STORE_MOVIES", () => {
    const initialState = [];
    const mockMovies = [{ title: "Aquaman" }, { title: "Triple Frontier" }];
    const action = actions.storeMovies(mockMovies);
    const result = moviesReducer(initialState, action);
    expect(result).toEqual(mockMovies);
  });
});
