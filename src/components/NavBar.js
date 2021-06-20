import { NavLink } from "react-router-dom";

import SpotifyLoginButton from "../spotify/LoginButton";
import Logout from "./LogoutButton";

import { selectUserToken } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function NavBar() {
  const userToken = useSelector(selectUserToken);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "2px",
        marginBottom: "5px",
      }}
    >
      <NavLink to="/" activeStyle={{ color: "lightgreen" }} exact>
        PlayList()
      </NavLink>
      {userToken && (
        <>
          <SpotifyLoginButton />

          <Logout />
        </>
      )}
    </div>
  );
}
