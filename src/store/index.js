import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
