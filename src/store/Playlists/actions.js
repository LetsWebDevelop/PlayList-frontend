import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectUserToken } from "../user/selectors";

export const FETCH_PLAYLISTS_SUCCES = "FETCH_PLAYLISTS_SUCCES";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const fetchPlaylistSucces = (playlists) => {
  return {
    type: FETCH_PLAYLISTS_SUCCES,
    payload: playlists,
  };
};

export const playListCreated = (newPlaylist) => {
  return {
    type: CREATE_PLAYLIST,
    payload: newPlaylist,
  };
};

export const playlistDELETED = (playlistID) => {
  return {
    type: DELETE_PLAYLIST,
    payload: playlistID,
  };
};

export const fetchPlaylists = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const id = localStorage.getItem("userId");

    try {
      const userToken = selectUserToken(getState());

      const response = await axios.get(`${apiUrl}/playlist/mylists/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      dispatch(fetchPlaylistSucces(response.data.playlists));

      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);

      dispatch(appDoneLoading());
    }
  };
};

export const createNewPlaylist = (name) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const userToken = selectUserToken(getState());

      const response = await axios.post(
        `${apiUrl}/playlist/create`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      console.log(
        "Congrats! You made a new PlayList, awesome!",
        response.data.playlist,
      );
      dispatch(playListCreated(response.data.playlist));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);

      dispatch(appDoneLoading());
    }
  };
};

export const deletePlaylist = (playlistID) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const userToken = selectUserToken(getState());

      const response = await axios.delete(
        `${apiUrl}/playlist/${playlistID}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      console.log("Delete playlist RESPONSE:", response);
      dispatch(playlistDELETED(playlistID));

      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
