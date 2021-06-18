import { CREATE_PLAYLIST } from "./actions";

const initialState = {};

export default function createPlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return { ...action.payload };
    default:
      return state;
  }
}
