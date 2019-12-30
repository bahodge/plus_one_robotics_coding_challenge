import { store } from "./store";
import { addResultToSearchHistory } from "./actions";

const dispatchAddResultToSearchHistory = (term, searchResult) => {
  return store.dispatch(addResultToSearchHistory(term, searchResult));
};

export { dispatchAddResultToSearchHistory };
