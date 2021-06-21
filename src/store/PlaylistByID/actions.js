import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectUserToken } from "../user/selectors";

export const FETCH_PLAYLISTBYID_SUCCES = "FETCH_PLAYLISTBYID_SUCCES";
export const CLEAR_PLAYLISTBYID = "CLEAR_PLAYLSITBYID"

export const fetchPlaylistByIdSucces = (playlistByID) => {
  return {
    type: FETCH_PLAYLISTBYID_SUCCES,
    payload: playlistByID,
  };
};

export const clearPlaylistByID = (playlistByID) => {
  return {
    type: CLEAR_PLAYLISTBYID,
    payload: playlistByID
  }
}

export const fetchPlaylistByID = (playlistID) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const userToken = selectUserToken(getState());

      const response = await axios.get(`${apiUrl}/playlist/${playlistID}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("what does this do", response.data.playlists);
      dispatch(fetchPlaylistByIdSucces(response.data.playlists));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
