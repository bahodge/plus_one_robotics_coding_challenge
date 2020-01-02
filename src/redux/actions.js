/*
 * action types
 */

export const ADD_TO_SEARCH_RESULT = "ADD_TO_SEARCH_RESULT";
export const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";
export const SET_THEATER_RESULTS = "SET_THEATER_RESULTS";
export const CLEAR_THEATER_RESULTS = "CLEAR_THEATER_RESULTS";

/*
 * action creators
 */

export function addToSearchResult(searchResult) {
  return { type: ADD_TO_SEARCH_RESULT, searchResult: searchResult };
}

export function clearSearchResult() {
  return { type: CLEAR_SEARCH_RESULT, searchResult: null };
}

export function setTheaterResults(theaterResults) {
  return { type: SET_THEATER_RESULTS, theaterResults: theaterResults };
}

export function clearTheaterResults() {
  return { type: CLEAR_THEATER_RESULTS, theaterResults: null };
}
