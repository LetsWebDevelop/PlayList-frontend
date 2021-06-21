import { FETCH_PLAYLISTS_SUCCES, CREATE_PLAYLIST } from "./actions";

const initialState = [];

export default function fetchPlaylistsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCES:
      return [...action.payload];

    case CREATE_PLAYLIST:
      return [action.payload, ...state];

    default:
      return state;
  }
}
