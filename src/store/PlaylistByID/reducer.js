import { FETCH_PLAYLISTBYID_SUCCES, CLEAR_PLAYLISTBYID } from "./actions";

const initialState = {};

export default function fetchPlaylistByIDReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTBYID_SUCCES:
      return { ...action.payload };

case CLEAR_PLAYLISTBYID:
        return {}

    default:
      return state;
  }
}
