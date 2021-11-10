import { combineReducers } from "redux";
import { languageReducer } from "../modules/language/languageReducer";

export const rootReducer=combineReducers({

language:languageReducer
})