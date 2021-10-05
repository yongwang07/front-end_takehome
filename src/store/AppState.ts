import { combineReducers } from "redux";
import TileReducer from "../reducer";

export const rootReducer = combineReducers({
  tile: TileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
