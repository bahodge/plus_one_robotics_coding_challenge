// import { ADD_RESULT_TO_SEARCH_HISTORY } from "./actions";
import { ADD_TO_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from "./actions";

export const searchHistories = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULT:
      state.searchResult = action.searchResult;
      return state;
    case CLEAR_SEARCH_RESULT:
      state.searchResult = null;
      return state;
    default:
      return state;
  }
};