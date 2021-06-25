import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearSpotifyMusic } from "../store/spotifyMusic/actions";

import "./PlayListComponent.css";
import MusicComponent from "./MusicComponent";
import { setSpotifySong } from "../store/playSong/actions";

export default function PlayListComponent() {
  const playlist = useSelector(selectPlaylistByID);
  const songs = playlist.songs;
  const dispatch = useDispatch();

  // const index = array?.findIndex((item) => {
  //   if (URI === item) return item;
  // });

  // const nextIndex = index + 1;

  // const nextItem = array?.find((index) => {
  //   if (index === array[nextIndex]) return index;
  // });

  // const stringToJSON = JSON.stringify(arrayToString);
  const playAll = () => {
    const array = songs?.map((song) => {
      return song.uri;
    });
    // const space =  ;
    // const arrayToString = array?.join(",");
    dispatch(setSpotifySong(array));
    console.log("songs in playlist", array);
    // console.log("this string bad", arrayToString);
  };

  useEffect(() => {
    dispatch(clearSpotifyMusic());
    // console.log("playlist array", arrayToString);
    // console.log("next", nextItem);
    // localStorage.setItem("URIS", array);
  }, [dispatch]);

  return (
    <div className="mainBoxPL">
      <button
        onClick={playAll}
        style={{
          marginLeft: "5px",
          border: "none",
          borderBottom: "1px solid black",
          cursor: "pointer",
        }}
      >
        play all
      </button>

      {songs?.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h3>So empty here! Add some songs!</h3>
        </div>
      )}

      {songs?.map((song) => {
        return (
          <div key={song.id}>
            <div className="musicBoxPL">
              <div
                onClick={() => dispatch(setSpotifySong(song.uri))}
                className="playSongPL"
              >
                <MusicComponent img={song.image} />
              </div>
              <div className="songTitleArtistBoxPL">
                <div className="defaultTitleTextPL">
                  <MusicComponent title={song.title} />
                </div>
                <div className="defaultArtistTextPL">
                  <MusicComponent artist={song.artist} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
