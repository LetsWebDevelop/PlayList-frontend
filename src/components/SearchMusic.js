import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchInput } from "../store/searchInput/actions";
import { fetchSpotifyMusic } from "../store/spotifyMusic/actions";

export default function SearchMusic() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    dispatch(setSearchInput(search));
    dispatch(fetchSpotifyMusic());
  };

  return (
    <div style={{ marginLeft: "5px" }}>
      <input
        type="text"
        placeholder="Spotify Search"
        value={search}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
