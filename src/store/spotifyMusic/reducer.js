import { FETCH_SPOTIFY_MUSIC } from "./actions";

const initialState = {};

export default function fetchMusicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_MUSIC:
      return { ...action.payload };

    default:
      return state;
  }
}
