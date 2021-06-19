export const SET_SPOTIFY_TOKEN = "SET_SPOTIFY_TOKEN";

export const setSpotifyToken = (token) => {
  return {
    type: SET_SPOTIFY_TOKEN,
    payload: token,
  };
};
