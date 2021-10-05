import { createStore } from "redux";
import { rootReducer } from "../store/AppState";

const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;
