import { createStore } from "redux";
import { searchHistories } from "./reducers";
// use combineReducers to combine all the reducers if I end up making multiple

export const store = createStore(searchHistories);
