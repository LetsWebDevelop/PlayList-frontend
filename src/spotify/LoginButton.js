import React from "react";

import { client_id } from "../secrets/spotify";

import { useSelector } from "react-redux";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

export default function SpotifyLoginButton() {
  const token = useSelector(selectSPOTIFYToken);
  // const AUTH_URL =
  //   "https://accounts.spotify.com/authorize?client_id=43161e27bfce4eb8810ae3b62098d649&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

  const CLIENT_ID = client_id;
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL = "http://localhost:3000/redirect";
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
    <div style={{ marginTop: "20px" }}>
      {token ? (
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
