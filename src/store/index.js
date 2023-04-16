import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cardsReducer } from "./cardsReducer";
import { darkModeReducer } from "./darkModeReducer";
import { singleCardReducer } from "./singleCardReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: singleCardReducer,
  darkMode: darkModeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
