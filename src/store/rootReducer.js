import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spotifyToken from "./spotifyToken/reducer";
import newPlaylist from "./createPlaylist/reducer";
import playlists from "./getPlaylists/reducer";

export default combineReducers({
  appState,
  user,
  spotifyToken,
  newPlaylist,
  playlists,
});
