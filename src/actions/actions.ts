import { FieldValues } from "../components/Form/TinyForm";
import { Tile } from "../reducer";
import { simpleUniqueId } from "../utils/IdGenerator";

export enum ActionTypes {
  ADD_TILE = "ADD_TILE",
}

export type Action = {
  type: ActionTypes.ADD_TILE;
  payload: Tile;
};

export const addTile = (values: FieldValues): Action => ({
  type: ActionTypes.ADD_TILE,
  payload: {
    id: simpleUniqueId(),
    ...values,
  } as Tile,
});
