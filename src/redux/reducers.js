import { ADD_RESULT_TO_SEARCH_HISTORY } from "./actions";

export const searchHistories = (state = {}, action) => {
  switch (action.type) {
    case ADD_RESULT_TO_SEARCH_HISTORY:
      if (action.term in state) {
        return state;
      } else {
        state[action.term] = action.searchResult;
        return state;
      }
    default:
      return state;
  }
};
