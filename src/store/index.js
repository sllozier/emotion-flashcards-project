import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { cardsReducer } from './cardsReducer';
import { singleCardReducer } from "./singleCardReducer";
// import { studentsReducer } from "./studentsReducer";
// import { singleStudentReducer } from "./singleStudentReducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
    card: singleCardReducer,
    // students: studentsReducer,
    // student: singleStudentReducer,
})

export const store = createStore(
   rootReducer,
   applyMiddleware(thunk)
    
)
