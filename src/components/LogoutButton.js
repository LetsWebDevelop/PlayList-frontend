import React from "react";
import { useDispatch } from "react-redux";
import { clearPlaylistByID } from "../store/PlaylistByID/actions";

import { spotifyLogOut } from "../store/spotifyToken/actions";
import { logOut } from "../store/user/actions";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
    dispatch(spotifyLogOut());
    dispatch(clearPlaylistByID());
    localStorage.setItem("noSpotifyToken", true);
  };

  return (
    <div>
      <button className="logoutButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
