import { searchResults } from "../../redux/reducers";

const baseSearchResult = { hello: "world" };
const baseTheaterResults = { hello: "theaters" };

test("updates the state based on action", () => {
  const newSearchResult = baseSearchResult;
  const action = {
    type: "ADD_TO_SEARCH_RESULT",
    searchResult: newSearchResult
  };
  const currentState = {};

  const result = searchResults(currentState, action);

  expect(result.hasOwnProperty("searchResult")).toBe(true);
  expect(result.searchResult).toEqual(newSearchResult);
});

test("updates the state based on action", () => {
  const action = {
    type: "CLEAR_SEARCH_RESULT"
  };
  const currentState = { searchResult: baseSearchResult };

  const result = searchResults(currentState, action);

  expect(result.hasOwnProperty("searchResult")).toBe(true);
  expect(result.searchResult).toEqual(null);
});

test("updates the state based on action", () => {
  const newTheaterResults = baseTheaterResults;
  const action = {
    type: "SET_THEATER_RESULTS",
    theaterResults: newTheaterResults
  };
  const currentState = {};

  const result = searchResults(currentState, action);

  expect(result.hasOwnProperty("theaterResults")).toBe(true);
  expect(result.theaterResults).toEqual(newTheaterResults);
});

test("updates the state based on action", () => {
  const action = {
    type: "CLEAR_THEATER_RESULTS"
  };
  const currentState = { theaterResults: baseTheaterResults };

  const result = searchResults(currentState, action);

  expect(result.hasOwnProperty("theaterResults")).toBe(true);
  expect(result.theaterResults).toEqual(null);
});
