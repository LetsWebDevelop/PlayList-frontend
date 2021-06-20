import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createNewPlaylist } from "../store/createPlaylist/actions";

import { selectUserToken } from "../store/user/selectors";
import { selectPlaylists } from "../store/getPlaylists/selectors";
import { fetchPlaylists } from "../store/getPlaylists/actions";

export default function MyPlayLists() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const userToken = useSelector(selectUserToken);
  const playlists = useSelector(selectPlaylists);
  const history = useHistory();

  const submitPlaylistHandler = (event) => {
    event.preventDefault();
    dispatch(createNewPlaylist(name));
    setName("");
    history.push("/loading");
  };

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    }
    dispatch(fetchPlaylists());
  }, [dispatch, userToken, history]);

  return (
    <div
      style={{
        marginLeft: "5px",
        minWidth: "184px",
        maxWidth: "184px",
      }}
    >
      <p>My PlayLists</p>
      <form onSubmit={submitPlaylistHandler}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="New PlayList"
        ></input>
      </form>
      <div>
        <div
          style={{
            textAlign: "left",
            minHeight: "68vh",
            maxHeight: "68vh",
            overflow: "auto",
            direction: "rtl",
            paddingLeft: "4px",
            paddingRight: "4px",
          }}
        >
          {playlists.map((playlist) => {
            return (
              <div key={playlist.id}>
                <p style={{ fontSize: "10px" }}>{playlist.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
