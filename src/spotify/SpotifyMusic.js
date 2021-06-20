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
        fontSize: "50%",
        marginTop: "20px",
        marginRight: "20px",
        marginLeft: "20px",
        maxHeight: "75vh",
        overflowY: "auto",
      }}
    >
      {song.items?.map((tracks) => {
        return (
          <div
            key={tracks.id}
            style={{
              marginTop: "1px",
              marginBottom: "1px",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              borderBottom: "1px solid grey",
              height: "70px",
              maxWidth: "77vw",
              minWidth: "77vw",
              cursor: "pointer",
              overflowY: "auto",
              overflowX: "hidden",
            }}
            onClick={() => setTrack(tracks.uri)}
          >
            <img src={tracks.album.images[2].url} alt={tracks.name} />

            <div style={{ marginLeft: "3px", color: "grey", flexWrap: "wrap" }}>
              {tracks.name.includes(search) ? (
                <p
                  style={{
                    color: "black",
                    fontSize: "120%",
                    fontWeight: "bold",
                  }}
                >
                  {tracks.name}
                </p>
              ) : (
                <p style={{ fontSize: "120%", fontWeight: "bold" }}>
                  {tracks.name}
                </p>
              )}

              {tracks.artists?.map((artists) => {
                return (
                  <div key={artists.id} style={{ color: "grey" }}>
                    {artists.name.includes(search) ? (
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        {artists.name}
                      </p>
                    ) : (
                      <p>{artists.name}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
