import { FETCH_PLAYLISTS_SUCCES } from "./actions";

const initialState = [];

export default function fetchPlaylistsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCES:
      return [...action.payload];

    default:
      return state;
  }
}
