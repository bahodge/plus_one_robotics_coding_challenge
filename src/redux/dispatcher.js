import { store } from "./store";
// import { addResultToSearchHistory } from "./actions";
import { addToSearchResult } from "./actions";

// const dispatchAddResultToSearchHistory = (term, searchResult) => {
//   return store.dispatch(addResultToSearchHistory(term, searchResult));
// };

const dispatchAddToSearchResult = searchResult => {
  return store.dispatch(addToSearchResult(searchResult));
};

// export { dispatchAddResultToSearchHistory, dispatchAddToSearchResult }

export { dispatchAddToSearchResult };
