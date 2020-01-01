// import { ADD_RESULT_TO_SEARCH_HISTORY } from "./actions";
import { ADD_TO_SEARCH_RESULT } from "./actions";

export const searchHistories = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULT:
      state.searchResult = action.searchResult;
      return state;
      break;
    default:
      return state;
  }
};
