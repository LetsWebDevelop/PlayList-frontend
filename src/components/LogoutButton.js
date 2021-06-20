import React from "react";
import { useDispatch } from "react-redux";

import { spotifyLogOut } from "../store/spotifyToken/actions";
import { logOut } from "../store/user/actions";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
    dispatch(spotifyLogOut());
  };

  return (
    <div>
      <button
        style={{ backgroundColor: "red", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
