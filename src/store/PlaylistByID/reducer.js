import {
  FETCH_PLAYLISTBYID_SUCCES,
  CLEAR_PLAYLISTBYID,
  DELETE_SONG,
} from "./actions";

const initialState = {};

export default function fetchPlaylistByIDReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTBYID_SUCCES:
      return { ...action.payload };

    case CLEAR_PLAYLISTBYID:
      return {};

    case DELETE_SONG:
      const songId = action.payload;
      const newSongs = state.songs.filter((song) => song.id !== songId);
      return { state, songs: [...newSongs] };

    default:
      return state;
  }
}
