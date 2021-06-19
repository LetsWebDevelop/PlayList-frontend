import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

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
    <div>
      <SpotifyPlayer
        token={spotifyToken}
        callback={songPlaying}
        play={play}
        uris={spotifyTrack ? [spotifyTrack] : []}
      />
    </div>
  );
}
