import { useState } from "react";
import { useDispatch } from "react-redux";

import "./SearchMusic.css";

import { setSearchInput } from "../store/searchInput/actions";
import {
  fetchNewReleasesSpotify,
  fetchSpotifyMusic,
} from "../store/spotifyMusic/actions";
import { clearPlaylistByID } from "../store/PlaylistByID/actions";

export default function SearchMusic() {
  const [searchMusic, setSearchMusic] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandle = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    dispatch(setSearchInput(search));
    dispatch(fetchSpotifyMusic());
    dispatch(clearPlaylistByID());
  };

  const SearchMusic = () => {
    setSearchMusic(!searchMusic);

    if (searchMusic) {
      setSearch("");
    }

    dispatch(clearPlaylistByID());
    dispatch(fetchNewReleasesSpotify());
  };

  const NewReleases = () => {
    dispatch(fetchNewReleasesSpotify());
    dispatch(clearPlaylistByID());
    setSearch("");
    setSearchMusic(false);
  };

  return (
    <div className="searchMusicMain">
      <button className="buttonBox" onClick={NewReleases}>
        New Releases
      </button>
      <button className="buttonBox" onClick={SearchMusic}>
        Search Music
      </button>
      {searchMusic && (
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Spotify Search"
            defaultValue={search}
            onChange={submitHandle}
            className="searchBox"
          ></input>
        </form>
      )}
    </div>
  );
}
