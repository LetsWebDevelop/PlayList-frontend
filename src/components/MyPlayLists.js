import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./MyPlayLists.css";

import { selectUser, selectUserToken } from "../store/user/selectors";
import { selectPlaylists } from "../store/Playlists/selectors";
import { fetchPlaylists, createNewPlaylist } from "../store/Playlists/actions";
import { fetchPlaylistByID } from "../store/PlaylistByID/actions";
import { clearSpotifyMusic } from "../store/spotifyMusic/actions";

export default function MyPlayLists() {
  const [name, setName] = useState("");
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
    <div className="mainPlayListBox">
      <p className="playListBorderBottom">
        {user.username}'s PlayLists{" "}
        <button
          className="addPlaylistButton"
          onClick={() => setAddList(!addList)}
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
            className="addPLBox"
          ></input>
        </form>
      )}

      <div className="playlistBox">
        {playlists.map((playlist) => {
          return (
            <div
              className="clickBox"
              key={playlist.id}
              onClick={() => {
                dispatch(fetchPlaylistByID(playlist.id));
                dispatch(clearSpotifyMusic());
              }}
            >
              <p>{`${playlist.name}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
