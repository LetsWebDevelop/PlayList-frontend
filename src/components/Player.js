import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

import "./Player.css";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";
import { selectSpotifySong } from "../store/playSong/selectors";

import { useSelector } from "react-redux";

export default function Player() {
  const spotifyToken = useSelector(selectSPOTIFYToken);
  const spotifyTrack = useSelector(selectSpotifySong);
  const [play, setPlay] = useState(false);

  const songPlaying = (state) => {
    if (!state.isPlaying) {
      setPlay(false);
    }
  };

  useEffect(() => setPlay(true), [spotifyTrack]);

  return (
    <div className="playerBox">
      <SpotifyPlayer
        token={spotifyToken}
        callback={songPlaying}
        play={play}
        uris={spotifyTrack[0] ? spotifyTrack[0] : []}
        // uris={[
        //   "spotify:album:340wvzkkhWbH7wllc3UDLM",
        //   "spotify:album:01NhUvviMytvV12pmJiDZH",
        //   "spotify:album:1nAQbHeOWTfQzbOoFrvndW",
        // ]}
      />
    </div>
  );
}
