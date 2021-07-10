import {
  FETCH_PLAYLISTS_SUCCES,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
} from "./actions";

const initialState = [];

export default function fetchPlaylistsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCES:
      return [...action.payload];

    case CREATE_PLAYLIST:
      return [action.payload, ...state];

    case DELETE_PLAYLIST:
      const playlistId = action.payload;
      const newPlaylists = state.filter(
        (playlist) => playlist.id !== playlistId,
      );
      return [...newPlaylists];

    default:
      return state;
  }
}
