import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { selectUserToken } from "../store/user/selectors";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

import SpotifyMusic from "../spotify/SpotifyMusic";
import MyPlayLists from "../components/MyPlayLists";
import Player from "../components/Player";
import SearchMusic from "../components/SearchMusic";

export default function HomePage() {
  const spotifyToken = useSelector(selectSPOTIFYToken);
  const userToken = useSelector(selectUserToken);
  const history = useHistory();

  if (!userToken) {
    history.push("/login");
  }

  return (
    <div>
      <div>{spotifyToken && userToken && <SearchMusic />}</div>
      <div style={{ display: "flex", alignSelf: "flex-start" }}>
        {userToken && <MyPlayLists />}

        {spotifyToken && userToken && <SpotifyMusic />}
      </div>

      {spotifyToken && userToken && <Player />}
    </div>
  );
}
