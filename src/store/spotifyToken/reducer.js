import { SET_SPOTIFY_TOKEN } from "./actions";

const initialState = {
  token: null,
};

export default function spotifyTokenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTIFY_TOKEN:
      return { token: action.payload };
    default:
      return state;
  }
}
