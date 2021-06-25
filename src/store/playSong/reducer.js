import { SET_SPOTIFY_SONG } from "./actions";

const initialState = "";

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTIFY_SONG:
      return action.payload;
    default:
      return state;
  }
}
