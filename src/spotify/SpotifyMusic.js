import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSpotifySong } from "../store/playSong/actions";

import { selectSpotifyMusic } from "../store/spotifyMusic/selectors";
import { selectSearchInput } from "../store/searchInput/selectors";

export default function SpotifyMusic() {
  const search = useSelector(selectSearchInput);
  const song = useSelector(selectSpotifyMusic);

  const [track, setTrack] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSpotifySong(track));
  }, [dispatch, track]);

  return (
    <div
      style={{
        textAlign: "left",
        fontSize: "10px",
        marginRight: "20px",
        marginLeft: "20px",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      {song.items?.map((tracks) => {
        return (
          <div
            key={tracks.id}
            style={{
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              borderBottom: "1px solid grey",
              height: "15px",
              maxWidth: "80vw",
              minWidth: "80vw",
              cursor: "pointer",
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
                  {artists.name.includes(search) ? (
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
              {tracks.name.includes(search) ? (
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
    </div>
  );
}
