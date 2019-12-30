/*
 * action types
 */

export const ADD_RESULT_TO_SEARCH_HISTORY = "ADD_RESULT_TO_SEARCH_HISTORY";

/*
 * action creators
 */

export function addResultToSearchHistory(term, searchResult) {
  return { type: ADD_RESULT_TO_SEARCH_HISTORY, term, searchResult };
}
