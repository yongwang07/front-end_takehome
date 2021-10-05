import { Action, ActionTypes } from "../actions/actions";

export interface Tile {
  id: string;
  heading: string;
  pass: string;
  summary: string;
}

const TileReducer = (state: Array<Tile> = [], action: Action): Array<Tile> => {
  switch (action.type) {
    case ActionTypes.ADD_TILE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default TileReducer;
