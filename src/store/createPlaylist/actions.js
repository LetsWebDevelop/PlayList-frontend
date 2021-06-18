import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectUserToken } from "../user/selectors";

export const CREATE_PLAYLIST = "CREATE_PLAYLIST";

export const playListCreated = (newPlaylist) => {
  return {
    type: CREATE_PLAYLIST,
    payload: newPlaylist,
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
        }
      );
      console.log(
        "Congrats! You made a new PlayList, awesome!",
        response.data.playlist
      );
      dispatch(playListCreated(response.data.playlist));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);

      dispatch(appDoneLoading());
    }
  };
};
