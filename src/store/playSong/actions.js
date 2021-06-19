export const SET_SPOTIFY_SONG = "SET_SPOTIFY_SONG";

export const setSpotifySong = (spotifySong) => {
  return {
    type: SET_SPOTIFY_SONG,
    payload: spotifySong,
  };
};
