import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { selectUserToken } from "../store/user/selectors";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

import SpotifyMusic from "../spotify/SpotifyMusic";
import MyPlayLists from "../components/MyPlayLists";
import Player from "../components/Player";

export default function HomePage() {
  const spotifyToken = useSelector(selectSPOTIFYToken);
  const userToken = useSelector(selectUserToken);
  const history = useHistory();

  if (!userToken) {
    history.push("/login");
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to PlayList</h1>
      {!userToken && (
        <p style={{ textAlign: "center" }}>
          You have to{" "}
          <Link to="/login" style={{ color: "lightgreen", marginTop: "20px" }}>
            Login{" "}
          </Link>
          to gain access to the app
        </p>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {userToken && <MyPlayLists />}
        {spotifyToken && userToken && <SpotifyMusic />}
      </div>
      {spotifyToken && userToken && <Player />}
    </div>
  );
}
