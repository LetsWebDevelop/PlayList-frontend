export const SET_SPOTIFY_TOKEN = "SET_TOKEN";

export const setSpotifyToken = (token) => {
  return {
    type: SET_SPOTIFY_TOKEN,
    payload: token,
  };
};
