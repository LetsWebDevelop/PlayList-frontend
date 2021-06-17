import { combineReducers } from "redux";
import spotifyToken from "./spotifyToken/reducer";
import user from "./user/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  appState,
  user,
  spotifyToken,
});
