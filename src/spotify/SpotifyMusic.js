import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

import SpotifyPlayer from "react-spotify-web-playback";

export default function SearchSpotifyMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [song, setSong] = useState("");
  const [play, setPlay] = useState("");
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
          <div
            key={tracks.id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid grey",
            }}
          >
            <button
              style={{ cursor: "pointer" }}
              onClick={(event) => setPlay(tracks.uri)}
            >
              Play Song
            </button>
            {tracks.artists?.map((artists) => {
              return (
                <div style={{ marginLeft: "5px", color: "grey" }}>
                  {" "}
                  {artists.name.includes(searchInput) ? (
                    <p
                      style={{
                        marginLeft: "5px",
                        color: "black",
                      }}
                    >
                      {artists.name} -
                    </p>
                  ) : (
                    <p>{artists.name} - </p>
                  )}
                </div>
              );
            })}
            {tracks.name.includes(searchInput) ? (
              <p
                style={{
                  color: "black",
                  marginLeft: "5px",
                }}
              >
                {tracks.name}
              </p>
            ) : (
              <p
                style={{
                  color: "grey",
                  marginLeft: "5px",
                }}
              >
                {tracks.name}
              </p>
            )}
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
      {token && (
        <div>
          <SpotifyPlayer token={token} uris={play} />
        </div>
      )}
    </div>
  );
}
