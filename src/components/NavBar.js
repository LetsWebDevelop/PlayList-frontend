import { NavLink } from "react-router-dom";

import "./NavBar.css";
import SpotifyLoginButton from "../spotify/LoginButton";
import Logout from "./LogoutButton";

import { selectUserToken } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function NavBar() {
  const userToken = useSelector(selectUserToken);

  return (
    <div className="mainNav">
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
