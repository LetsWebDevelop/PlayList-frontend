import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setSpotifySong } from "../store/playSong/actions";

export default function SearchSpotifyMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [song, setSong] = useState("");
  const [nextResults, setNextResults] = useState("");
  const [previousResults, setPreviousResults] = useState("");
  const [APInext, setAPInext] = useState("");
  const [APIprevious, setAPIprevious] = useState("");
  const [track, setTrack] = useState("");

  const spotifyToken = localStorage.getItem("spotifyToken");
  const dispatch = useDispatch();

  async function fetchSpotifySongs() {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Cartist&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );
    console.log(response.data.tracks);

    setSong(response.data.tracks);
  }

  async function fetchMoreSongs() {
    const response = await axios.get(`${APInext}`, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    setSong(response.data.tracks);
  }

  async function fetchPreviousSongs() {
    const response = await axios.get(`${APIprevious}`, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    setSong(response.data.tracks);
  }

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    setNextResults(song?.next);
    setAPInext(nextResults);
    setPreviousResults(song?.previous);
    setAPIprevious(previousResults);
    console.log("next API:", APInext);
    console.log("previous API:", APIprevious);
    fetchSpotifySongs();
  };

  const loadMore = (event) => {
    event.preventDefault();
    console.log(song);
    setNextResults(song?.next);
    setAPInext(nextResults);
    setPreviousResults(song?.previous);
    setAPIprevious(previousResults);
    console.log("next API:", APInext);
    console.log("previous API:", APIprevious);
    fetchMoreSongs();
  };

  const previousSongs = (event) => {
    event.preventDefault();
    console.log(song);
    setNextResults(song?.next);
    setAPInext(nextResults);
    setPreviousResults(song?.previous);
    setAPIprevious(previousResults);
    console.log("next API:", APInext);
    console.log("previous API:", APIprevious);

    fetchPreviousSongs();
  };

  useEffect(() => {
    dispatch(setSpotifySong(track));
  }, [dispatch, track]);

  return (
    <div style={{ fontSize: "10px", marginRight: "20px" }}>
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
              minWidth: "500px",
              cursor: "pointer",
              marginBottom: "5px",
              padding: "5px",
            }}
            onClick={() => setTrack(tracks.uri)}
          >
            {tracks.artists?.map((artists) => {
              return (
                <div
                  key={artists.id}
                  style={{ marginLeft: "3px", color: "grey" }}
                >
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

      {APIprevious === "" ? (
        " "
      ) : (
        <button onClick={previousSongs}>Previous page</button>
      )}
      {song.next === null ? (
        <p>No more songs</p>
      ) : (
        searchInput.length >= 1 && <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
}
