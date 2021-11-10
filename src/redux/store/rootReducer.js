import { combineReducers } from "redux";
import { languageReducer } from "../modules/language/languageReducer";
import { productReducer } from "../modules/product/productReducer";

export const rootReducer=combineReducers({

language:languageReducer,
product:productReducer
})