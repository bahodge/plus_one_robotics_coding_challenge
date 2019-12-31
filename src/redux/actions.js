/*
 * action types
 */

// export const ADD_RESULT_TO_SEARCH_HISTORY = "ADD_RESULT_TO_SEARCH_HISTORY";

export const ADD_TO_SEARCH_RESULT = "ADD_TO_SEARCH_RESULT";
export const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";

/*
 * action creators
 */

export function addToSearchResult(searchResult) {
  return { type: ADD_TO_SEARCH_RESULT, searchResult: searchResult };
}

export function clearSearchResult() {
  return { type: CLEAR_SEARCH_RESULT, searchResult: null };
}

// export function addResultToSearchHistory(term, searchResult) {
//   return { type: ADD_RESULT_TO_SEARCH_HISTORY, term, searchResult };
// }
