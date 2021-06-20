import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectUserToken } from "../user/selectors";

export const FETCH_PLAYLISTS_SUCCES = "FETCH_PLAYLISTS_SUCCES";

export const fetchPlaylistSucces = (playlists) => {
  return {
    type: FETCH_PLAYLISTS_SUCCES,
    payload: playlists,
  };
};

export const fetchPlaylists = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const id = localStorage.getItem("userId");

    try {
      const userToken = selectUserToken(getState());

      const response = await axios.get(`${apiUrl}/playlist/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response.data.playlists);
      dispatch(fetchPlaylistSucces(response.data.playlists));

      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);

      dispatch(appDoneLoading());
    }
  };
};
