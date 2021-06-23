import { FETCH_SPOTIFY_MUSIC, CLEAR_SPOTIFY_MUSIC } from "./actions";

const initialState = {};

export default function fetchMusicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_MUSIC:
      return { ...action.payload };

    case CLEAR_SPOTIFY_MUSIC:
      return {};

    default:
      return state;
  }
}
