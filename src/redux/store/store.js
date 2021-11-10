import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";


// export const store=  createStore(
//      rootReducer,
//      applyMiddleware(logger)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

// Store config
const Store = (initialState) => createStoreWithMiddleware(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store()