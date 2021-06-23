import { useState } from "react";
import { useDispatch } from "react-redux";

import "./SearchMusic.css"

import { setSearchInput } from "../store/searchInput/actions";
import { fetchSpotifyMusic } from "../store/spotifyMusic/actions";
import { clearPlaylistByID } from "../store/PlaylistByID/actions";

export default function SearchMusic() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandle = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    dispatch(setSearchInput(search));
    dispatch(clearPlaylistByID())
    dispatch(fetchSpotifyMusic());
  };

  return (
    <div className="searchMusicMain">
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Spotify Search"
          defaultValue={search}
          onChange={submitHandle}
          className="searchBox"
        ></input>
      </form>
    </div>
  );
}
