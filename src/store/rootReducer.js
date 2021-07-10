import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spotifyToken from "./spotifyToken/reducer";
import playlists from "./Playlists/reducer";
import song from "./playSong/reducer";
import search from "./searchInput/reducer";
import spotifyMusic from "./spotifyMusic/reducer";
import playlistByID from "./PlaylistByID/reducer";

export default combineReducers({
  appState,
  user,
  spotifyToken,
  playlists,
  song,
  search,
  spotifyMusic,
  playlistByID,
});
