import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
