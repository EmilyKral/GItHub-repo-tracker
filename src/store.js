import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { searchReducer } from "./reducers";

const store = createStore(searchReducer, composeWithDevTools());

export default store;
