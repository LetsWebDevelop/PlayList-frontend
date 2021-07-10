import {
  FETCH_SPOTIFY_MUSIC,
  DAILY_SPOTIFY_TOP50,
  CLEAR_SPOTIFY_MUSIC,
} from "./actions";

const initialState = {
  searchResults: {},
  spotifyTop50: {},
};

export default function fetchMusicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_MUSIC:
      return { searchResults: { ...action.payload } };

    case DAILY_SPOTIFY_TOP50:
      return { spotifyTop50: { ...action.payload } };

    case CLEAR_SPOTIFY_MUSIC:
      return { searchResults: {}, spotifyTop50: {} };

    default:
      return state;
  }
}
