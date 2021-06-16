import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

export default function SearchSpotifyMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [song, setSong] = useState("");
  //   const initialOffset = 0;
  const [offset, setOffset] = useState(0);
  const token = useSelector(selectSPOTIFYToken);

  async function fetchSpotifySongs() {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Cartist&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.tracks);
    setSong(response.data.tracks);
  }
  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    fetchSpotifySongs();
  };

  async function fetchMoreSongs() {
    const limit = 50;

    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Cartist&offset=${offset}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("next:", response.data.tracks);
    setSong(response.data.tracks);
  }

  const loadMore = (event) => {
    event.preventDefault();
    setOffset(offset + 50);
    fetchMoreSongs();
  };

  const previousSongs = (event) => {
    event.preventDefault();
    setOffset(offset - 50);
    fetchMoreSongs();
  };
  const resetOffset = (event) => {
    event.preventDefault();
    setOffset(offset === 0);
    fetchMoreSongs();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search music"
        value={searchInput}
        onChange={handleOnChange}
      ></input>
      {song.items?.map((tracks) => {
        return (
          <div key={tracks.id} style={{ border: "1px solid grey" }}>
            {tracks.artists?.map((artists) => {
              return <p>{artists.name}</p>;
            })}
            <p>{tracks.name}</p>
          </div>
        );
      })}
      {offset > 0 && <button onClick={resetOffset}>Back to start</button>}
      {offset > 0 && <button onClick={previousSongs}>Previous page</button>}
      {song.next === null ? (
        <p>No more songs</p>
      ) : (
        <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
}
