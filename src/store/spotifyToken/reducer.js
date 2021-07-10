import { SET_SPOTIFY_TOKEN, SPOTIFY_LOG_OUT } from "./actions";

const initialState = "";

export default function spotifyTokenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTIFY_TOKEN:
      return action.payload;

    case SPOTIFY_LOG_OUT:
      localStorage.removeItem("spotifyToken");
      return "";

    default:
      return state;
  }
}
