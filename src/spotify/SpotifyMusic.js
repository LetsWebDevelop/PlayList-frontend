import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectSPOTIFYToken } from "../store/spotifyToken/selectors";

import SpotifyPlayer from "react-spotify-web-playback";

export default function SearchSpotifyMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [song, setSong] = useState("");
  const [play, setPlay] = useState(false);
  const [track, setTrack] = useState("");
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
    setOffset(offset - offset);
    fetchMoreSongs();
  };

  useEffect(() => setPlay(true), [track]);

  return (
    <div style={{ fontSize: "10px" }}>
      <input
        type="text"
        placeholder="Spotify Search"
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
              maxWidth: "500px",
              cursor: "pointer",
              marginBottom: "5px",
              padding: "5px",
            }}
            onClick={(event) => setTrack(tracks.uri)}
          >
            {tracks.artists?.map((artists) => {
              return (
                <div style={{ marginLeft: "3px", color: "grey" }}>
                  {" "}
                  {artists.name.includes(searchInput) ? (
                    <p
                      style={{
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
            <div style={{ marginLeft: "3px", color: "grey" }}>
              {tracks.name.includes(searchInput) ? (
                <p
                  style={{
                    color: "black",
                  }}
                >
                  {tracks.name}
                </p>
              ) : (
                <p>{tracks.name}</p>
              )}
            </div>
          </div>
        );
      })}
      {offset > 0 && <button onClick={resetOffset}>Back to start</button>}
      {offset > 0 && <button onClick={previousSongs}>Previous page</button>}
      {song.next === null ? (
        <p>No more songs</p>
      ) : (
        searchInput.length >= 1 && <button onClick={loadMore}>Load more</button>
      )}
      {token && (
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <SpotifyPlayer
            token={token}
            callback={(state) => {
              if (!state.isPlaying) setPlay(false);
            }}
            play={play}
            uris={track ? [track] : []}
          />
        </div>
      )}
    </div>
  );
}
