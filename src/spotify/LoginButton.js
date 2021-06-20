import React from "react";
import { useSelector } from "react-redux";

import { Timer } from "../components/timer";

import { client_id } from "../secrets/spotify";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

export default function SpotifyLoginButton() {
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
    localStorage.setItem("noSpotifyToken", false);
  };

  const spotifyToken = localStorage.getItem("spotifyToken");
  const spotify_token = useSelector(selectSPOTIFYToken);

  return (
    <div>
      {!spotifyToken && spotify_token === null ? (
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
      ) : (
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "lightgreen",
            color: "white",
            cursor: "pointer",
          }}
        >
          Connected to Spotify
          <Timer />
        </button>
      )}
    </div>
  );
}
