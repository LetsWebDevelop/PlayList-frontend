import {
  FETCH_SPOTIFY_MUSIC,
  NEW_SPOTIFY_MUSIC,
  CLEAR_SPOTIFY_MUSIC,
} from "./actions";

const initialState = {
  searchResults: {},
  newReleases: {},
};

export default function fetchMusicReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_MUSIC:
      return { searchResults: { ...action.payload } };

    case NEW_SPOTIFY_MUSIC:
      return { newReleases: { ...action.payload } };

    case CLEAR_SPOTIFY_MUSIC:
      return {};

    default:
      return state;
  }
}
