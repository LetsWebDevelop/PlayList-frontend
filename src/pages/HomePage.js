import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectUserToken } from "../store/user/selectors";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";
import { fetchDailyTop50Spotify } from "../store/spotifyMusic/actions";

import "./HomePage.css";

import SpotifyMusic from "../spotify/SpotifyMusic";
import MyPlayLists from "../components/MyPlayLists";
import Player from "../components/Player";
import SearchMusic from "../components/SearchMusic";
import PlayListComponent from "../components/PlayListComponent";

export default function HomePage() {
  const spotifyToken = useSelector(selectSPOTIFYToken);
  const userToken = useSelector(selectUserToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    }

    dispatch(fetchDailyTop50Spotify());
  });

  return (
    <div>
      <div className="homeBox">
        <div>
          {spotifyToken && userToken && <SearchMusic />}
          {spotifyToken && userToken && <MyPlayLists />}
        </div>
        {spotifyToken && userToken && <SpotifyMusic />}
        {spotifyToken && userToken && <PlayListComponent />}
      </div>
      <div>{spotifyToken && userToken && <Player />}</div>
    </div>
  );
}
