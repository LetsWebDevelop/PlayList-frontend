import { SET_SPOTIFY_TOKEN, SPOTIFY_LOG_OUT } from "./actions";

const initialState = {
  token: null,
};

export default function spotifyTokenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOTIFY_TOKEN:
      return { token: action.payload };

    case SPOTIFY_LOG_OUT:
      localStorage.removeItem("spotifyToken");
      return { ...initialState, token: null };

    default:
      return state;
  }
}
