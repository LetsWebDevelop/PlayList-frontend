import axios from "axios";

import { appLoading, appDoneLoading } from "../appState/actions";

import { selectSearchInput } from "../searchInput/selectors";
import { spotifyLogOut } from "../spotifyToken/actions";

export const FETCH_SPOTIFY_MUSIC = "FETCH_SPOTIFY_MUSIC";
export const DAILY_SPOTIFY_TOP50 = "DAILY_SPOTIFY_TOP50";
export const CLEAR_SPOTIFY_MUSIC = "CLEAR_SPOTIFY_MUSIC";

export const fetchSpotifyMusicSucces = (spotifyMusic) => {
  return {
    type: FETCH_SPOTIFY_MUSIC,
    payload: spotifyMusic,
  };
};

export const fetchDailyTop50Succes = (spotifyMusic) => {
  return {
    type: DAILY_SPOTIFY_TOP50,
    payload: spotifyMusic,
  };
};

export const clearSpotifyMusic = () => {
  return {
    type: CLEAR_SPOTIFY_MUSIC,
  };
};

export const fetchSpotifyMusic = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const spotifyToken = localStorage.getItem("spotifyToken");
      const searchInput = selectSearchInput(getState());

      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Cartist&offest=0&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        },
      );
      dispatch(fetchSpotifyMusicSucces(response.data.tracks));

      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
      dispatch(appDoneLoading());
    }
  };
};

export const fetchDailyTop50Spotify = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const spotifyToken = localStorage.getItem("spotifyToken");

      const response = await axios.get(
        "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        },
      );
      console.log(response.data.tracks);
      dispatch(fetchDailyTop50Succes(response.data.tracks));
    } catch (error) {
      console.log("Error:", error);
      if (error.response.status === 401) {
        localStorage.setItem("noSpotifyToken", true);
        dispatch(spotifyLogOut());
        dispatch(appDoneLoading());
      }
    }
  };
};

export const addSpotifyQueue = (item) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const spotifyToken = localStorage.getItem("spotifyToken");

      const response = await axios.post(
        `https://api.spotify.com/v1/me/player/queue?uri=${item}`,
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        },
      );
      console.log("add to queue response:", response);
    } catch (error) {
      console.log("Error:", error);
      dispatch(appDoneLoading());
    }
  };
};
