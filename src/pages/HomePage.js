import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectUserToken } from "../store/user/selectors";
import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";
import { fetchNewReleasesSpotify } from "../store/spotifyMusic/actions";

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
    dispatch(fetchNewReleasesSpotify());
  });

  return (
    <div>
      {spotifyToken && userToken && <Player />}

      <div>{spotifyToken && userToken && <SearchMusic />}</div>
      <div style={{ display: "flex", alignSelf: "flex-start" }}>
        {spotifyToken && userToken && <MyPlayLists />}

        {spotifyToken && userToken && <SpotifyMusic />}
        {spotifyToken && userToken && <PlayListComponent />}
      </div>
    </div>
  );
}
