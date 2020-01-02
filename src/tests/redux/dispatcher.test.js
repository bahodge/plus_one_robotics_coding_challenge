import {
  dispatchAddToSearchResult,
  dispatchClearSearchResult,
  dispatchSetTheaterResults,
  dispatchClearTheaterResults
} from "../../redux/dispatcher";

import { store } from "../../redux/store";

//dispatchAddToSearchResult
test("it updates the store", () => {
  const newSearchResult = { hello: "world" };

  expect(store.getState().searchResult).toEqual(undefined);

  dispatchAddToSearchResult(newSearchResult);

  expect(store.getState().searchResult).toEqual(newSearchResult);
});

//dispatchClearSearchResult
test("it updates the store", () => {
  const newSearchResult = { hello: "world" };

  dispatchAddToSearchResult(newSearchResult);
  expect(store.getState().searchResult).toEqual(newSearchResult);
  dispatchClearSearchResult();

  expect(store.getState().searchResult).toEqual(null);
});

//dispatchSetTheaterResults
test("it updates the store", () => {
  const newTheaterResults = { hello: "world" };

  expect(store.getState().theaterResults).toEqual(undefined);

  dispatchSetTheaterResults(newTheaterResults);

  expect(store.getState().theaterResults).toEqual(newTheaterResults);
});

//dispatchClearTheaterResults
test("it updates the store", () => {
  const newTheaterResults = { hello: "world" };

  dispatchSetTheaterResults(newTheaterResults);
  expect(store.getState().theaterResults).toEqual(newTheaterResults);

  dispatchClearTheaterResults();

  expect(store.getState().theaterResults).toEqual(null);
});
