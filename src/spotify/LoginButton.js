import React from "react";

import { client_id } from "../secrets/spotify";

import { useSelector } from "react-redux";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

export default function SpotifyLoginButton() {
  const spotifyToken = useSelector(selectSPOTIFYToken);

  const CLIENT_ID = client_id;
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL = "http://localhost:3000/spotifyredirect";
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <div>
      {spotifyToken ? (
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "lightgreen",
            color: "white",
            cursor: "pointer",
          }}
        >
          Connected to Spotify
        </button>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login to Spotify
        </button>
      )}
    </div>
  );
}
