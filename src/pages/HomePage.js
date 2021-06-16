import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSpotifyToken } from "../store/spotifyToken/actions";
import { selectSpotifyToken } from "../store/spotifyToken/selectors";
import SpotifyLoginButton from "../spotify/LoginButton";
import SpotifyPlayer from "react-spotify-web-playback";

export default function HomePage() {
  const dispatch = useDispatch();
  const token = useSelector(selectSpotifyToken);

  useEffect(() => {
    if (!token) {
      const data = getToken(window.location.hash);
      console.log(data.access_token);
      const spotifyToken = data.access_token;
      console.log("spotify token:", spotifyToken);
      dispatch(setSpotifyToken(spotifyToken));
    }
  }, [dispatch, token]);

  const getToken = (hash) => {
    const afterHashTag = hash.substring(1);
    const paramsInUrl = afterHashTag.split("&");
    const paramsSplit = paramsInUrl.reduce((accumulater, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
    return paramsSplit;
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to PlayList</h1>
      {!token && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SpotifyLoginButton />
        </div>
      )}
      {token && (
        <SpotifyPlayer
          token={token}
          uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
        />
      )}
    </div>
  );
}
