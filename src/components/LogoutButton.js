import React from "react";
import { useDispatch } from "react-redux";

import { logOut } from "../store/user/actions";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
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
