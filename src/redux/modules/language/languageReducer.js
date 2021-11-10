import { actionTypes, languages } from "../../../constant/actionType";



export const languageReducer = (state = languages.russian, action) => {
  switch (action.type) {
      case actionTypes.CHANGE_TO_RUSSIAN:
      return languages.russian;
      case actionTypes.CHANGE_TO_ENGLISH:
      return languages.english;    
      default:
          return state;
  }
};