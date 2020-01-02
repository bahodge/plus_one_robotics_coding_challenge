import {
  ADD_TO_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT,
  SET_THEATER_RESULTS,
  CLEAR_THEATER_RESULTS,
  addToSearchResult,
  clearSearchResult,
  setTheaterResults,
  clearTheaterResults
} from "../../redux/actions";

test("returns a string", () => {
  expect(ADD_TO_SEARCH_RESULT).toEqual("ADD_TO_SEARCH_RESULT");
});

test("returns a string", () => {
  expect(CLEAR_SEARCH_RESULT).toEqual("CLEAR_SEARCH_RESULT");
});

test("returns a string", () => {
  expect(SET_THEATER_RESULTS).toEqual("SET_THEATER_RESULTS");
});

test("returns a string", () => {
  expect(CLEAR_THEATER_RESULTS).toEqual("CLEAR_THEATER_RESULTS");
});

test("returns an object", () => {
  const searchResult = { data: "some data" };
  const expectedResult = {
    type: "ADD_TO_SEARCH_RESULT",
    searchResult: searchResult
  };

  expect(addToSearchResult(searchResult)).toEqual(expectedResult);
});

test("returns an object", () => {
  const expectedResult = {
    type: "CLEAR_SEARCH_RESULT",
    searchResult: null
  };

  expect(clearSearchResult()).toEqual(expectedResult);
});

test("returns an object", () => {
  const theaterResults = { data: "some data" };
  const expectedResult = {
    type: "SET_THEATER_RESULTS",
    theaterResults: theaterResults
  };

  expect(setTheaterResults(theaterResults)).toEqual(expectedResult);
});

test("returns an object", () => {
  const expectedResult = {
    type: "CLEAR_THEATER_RESULTS",
    theaterResults: null
  };

  expect(clearTheaterResults()).toEqual(expectedResult);
});
