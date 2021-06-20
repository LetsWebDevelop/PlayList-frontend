export const SET_SPOTIFY_TOKEN = "SET_SPOTIFY_TOKEN";
export const SPOTIFY_LOG_OUT = "SPOTIFY_LOG_OUT";

export const setSpotifyToken = (token) => {
  return {
    type: SET_SPOTIFY_TOKEN,
    payload: token,
  };
};

export const spotifyLogOut = () => ({ type: SPOTIFY_LOG_OUT });
