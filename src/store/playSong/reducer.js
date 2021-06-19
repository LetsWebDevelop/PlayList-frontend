import { SET_SPOTIFY_SONG } from "./actions";

const initialState = {
  spotifySong: null,
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTIFY_SONG:
      return { spotifySong: action.payload };
    default:
      return state;
  }
}
