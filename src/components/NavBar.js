import { NavLink } from "react-router-dom";

import SpotifyLoginButton from "../spotify/LoginButton";

export default function NavBar() {
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
      <div style={{ marginTop: "20px" }}>
        <SpotifyLoginButton />
      </div>
    </div>
  );
}
