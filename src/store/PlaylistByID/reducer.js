import { FETCH_PLAYLISTBYID_SUCCES } from "./actions";

const initialState = {};

export default function fetchPlaylistByIDReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTBYID_SUCCES:
      return { ...action.payload };
    default:
      return state;
  }
}
