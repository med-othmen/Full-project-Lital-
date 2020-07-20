import { ATHENTIFICATION } from "../Action/types";
const initialState = [];

export default function AthentificationReducer(state = initialState, action) {
  if (action.type === ATHENTIFICATION) {
    return action.payload;
  }

  return state;
}
