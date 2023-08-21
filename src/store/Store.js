import { legacy_createStore, applyMiddleware } from "redux";
import movieReducer from "../reducer/movieReducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(movieReducer, applyMiddleware(thunk))