import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createNewPlaylist } from "../store/createPlaylist/actions";
import { fetchPlaylists } from "../store/getPlaylists/actions";
import { selectUserToken } from "../store/user/selectors";

export default function MyPlayLists() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const userToken = useSelector(selectUserToken);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    }

    dispatch(fetchPlaylists());
  }, [dispatch, userToken, history]);

  const submitPlaylistHandler = (event) => {
    event.preventDefault();
    dispatch(createNewPlaylist(name));
    setName("");
  };

  return (
    <div style={{ minWidth: "50px" }}>
      <h3>My PlayLists</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="New PlayList"
      ></input>
      <div>
        <button type="submit" onClick={submitPlaylistHandler}>
          Add Playlist
        </button>
      </div>
    </div>
  );
}
