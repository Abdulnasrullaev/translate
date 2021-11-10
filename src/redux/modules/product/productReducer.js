import { actionTypes } from "../../../constant/actionType";


export const productReducer=(state=[],action)=>{

    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
          state.push(action.payload)
          return state;  
        default:
            return state;
    }
}