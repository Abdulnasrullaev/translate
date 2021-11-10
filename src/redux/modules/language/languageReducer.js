import { actionTypes, languages } from "../../../constant/actionType";



export const languageReducer = (state = languages.english, action) => {
  switch (action.type) {
      case actionTypes.CHANGE_TO_RUSSIAN:
      return languages.russian;
      case actionTypes.CHANGE_TO_ENGLISH:
      return languages.english;
      case actionTypes.CHANGE_TO_DEUTCH:
        return languages.deutch;
      case actionTypes.CHANGE_TO_FRENCH:
        return languages.french;
      case actionTypes.CHANGE_TO_TAJIK:
        return languages.tajik;       
      default:
          return state;
  }
};