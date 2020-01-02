import { createStore } from "redux";
import { searchResults } from "./reducers";
// use combineReducers to combine all the reducers if I end up making multiple

export const store = createStore(searchResults);
