import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";
import { setSpotifyToken } from "../store/spotifyToken/actions";

export default function SpotifyRedirect() {
  const dispatch = useDispatch();
  const history = useHistory();
  const spotifyToken = useSelector(selectSPOTIFYToken);

  useEffect(() => {
    if (!spotifyToken) {
      const data = getToken(window.location.hash);
      // console.log(data.access_token);
      const spotifyToken = data.access_token;
      // console.log("spotify token:", spotifyToken);
      localStorage.setItem("spotifyToken", spotifyToken);
      dispatch(setSpotifyToken(spotifyToken));
    }
  }, [dispatch, spotifyToken]);

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

  if (spotifyToken) {
    history.push("/");
  }

  return (
    <div>
      <h3>Connected to Spotify</h3>
    </div>
  );
}
