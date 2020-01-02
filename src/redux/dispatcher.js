import { store } from "./store";
import {
  addToSearchResult,
  clearSearchResult,
  setTheaterResults,
  clearTheaterResults
} from "./actions";

const dispatchAddToSearchResult = searchResult => {
  return store.dispatch(addToSearchResult(searchResult));
};

const dispatchClearSearchResult = () => {
  return store.dispatch(clearSearchResult());
};

const dispatchSetTheaterResults = theaterResults => {
  return store.dispatch(setTheaterResults(theaterResults));
};

const dispatchClearTheaterResults = () => {
  return store.dispatch(clearTheaterResults());
};

export {
  dispatchAddToSearchResult,
  dispatchClearSearchResult,
  dispatchSetTheaterResults,
  dispatchClearTheaterResults
};
