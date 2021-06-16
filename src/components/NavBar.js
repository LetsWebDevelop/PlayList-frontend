import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectSpotifyToken } from "../store/spotifyToken/selectors";

export default function NavBar() {
  // const token = useSelector(selectSpotifyToken);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <NavLink
        to="/"
        activeStyle={{ color: "lightgreen", marginTop: "20px" }}
        exact
      >
        PlayList()
      </NavLink>
    </div>
  );
}
