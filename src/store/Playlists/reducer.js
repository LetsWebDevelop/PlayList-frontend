import { FETCH_PLAYLISTS_SUCCES, CREATE_PLAYLIST } from "./actions";

const initialState = [];

export default function fetchPlaylistsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return [action.payload, ...state];

    case FETCH_PLAYLISTS_SUCCES:
      return [...action.payload];

    default:
      return state;
  }
}
