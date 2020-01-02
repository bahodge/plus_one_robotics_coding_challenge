// import { ADD_RESULT_TO_SEARCH_HISTORY } from "./actions";
import {
  ADD_TO_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT,
  CLEAR_THEATER_RESULTS,
  SET_THEATER_RESULTS
} from "./actions";

export const searchResults = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULT:
      state.searchResult = action.searchResult;
      return state;
    case CLEAR_SEARCH_RESULT:
      state.searchResult = null;
      return state;
    case SET_THEATER_RESULTS:
      state.theaterResults = action.theaterResults;
      return state;
    case CLEAR_THEATER_RESULTS:
      state.theaterResults = null;
      return state;
    default:
      return state;
  }
};
