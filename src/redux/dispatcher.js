import { store } from "./store";
import { addToSearchResult, clearSearchResult } from "./actions";

const dispatchAddToSearchResult = searchResult => {
  return store.dispatch(addToSearchResult(searchResult));
};

const dispatchClearSearchResult = () => {
  return store.dispatch(clearSearchResult());
};

export { dispatchAddToSearchResult, dispatchClearSearchResult };
