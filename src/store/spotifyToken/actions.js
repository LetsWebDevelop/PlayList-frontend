export const SET_TOKEN = "SET_TOKEN";

export const setSpotifyToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};
