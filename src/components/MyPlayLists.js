import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectUserToken } from "../store/user/selectors";
import { selectPlaylists } from "../store/Playlists/selectors";
import { fetchPlaylists, createNewPlaylist } from "../store/Playlists/actions";
import { fetchPlaylistByID } from "../store/PlaylistByID/actions";

export default function MyPlayLists() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [addList, setAddList] = useState(false);
  const userToken = useSelector(selectUserToken);
  const playlists = useSelector(selectPlaylists);
  const history = useHistory();

  const submitPlaylistHandler = (event) => {
    event.preventDefault();
    dispatch(createNewPlaylist(name));
    setName("");
    setAddList(false);
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
      <p style={{ borderBottom: "1px solid grey" }}>
        My PlayLists{" "}
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => setAddList(true)}
        >
          +
        </button>
      </p>
      {addList && (
        <form onSubmit={submitPlaylistHandler}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="New PlayList"
          ></input>
        </form>
      )}

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
            <div
              key={playlist.id}
              style={{ borderBottom: "1px solid grey", cursor: "pointer" }}
              onClick={() => dispatch(fetchPlaylistByID(playlist.id))}
            >
              <p style={{ fontSize: "10px" }}>{`${playlist.name}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
