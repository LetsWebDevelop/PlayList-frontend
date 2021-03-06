import { NavLink } from "react-router-dom";
import logo from "./logo.png";

import "./NavBar.css";
import SpotifyLoginButton from "../spotify/LoginButton";
import Logout from "./LogoutButton";

import { selectUserToken } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function NavBar() {
  const userToken = useSelector(selectUserToken);

  return (
    <div className="mainNav">
      <NavLink to="/" exact>
        <img src={logo} alt="PlayList logo" className="logoStyle" />
      </NavLink>
      {userToken && (
        <>
          <div style={{ marginRight: "auto", marginLeft: "auto" }}>
            <SpotifyLoginButton />
          </div>
          <div>
            <Logout />
          </div>
        </>
      )}
    </div>
  );
}
