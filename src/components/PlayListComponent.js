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

  const playSong = (songURI) => {
    const array = songs?.map((song) => {
      return song.uri;
    });

    const index = array?.findIndex((index) => {
      if (songURI === index) return index;
      else return null;
    });

    const next1 = index + 1;
    const next2 = index + 2;
    const next3 = index + 3;
    const next4 = index + 4;
    const next5 = index + 5;
    // const next6 = index + 6;
    // const next7 = index + 7;
    // const next8 = index + 8;
    // const next9 = index + 9;
    // const next10 = index + 10;

    const nextItem1 = array?.find((item) => {
      if (item === array[next1]) return item;
      else return null;
    });

    const nextItem2 = array?.find((item) => {
      if (item === array[next2]) return item;
      else return null;
    });

    const nextItem3 = array?.find((item) => {
      if (item === array[next3]) return item;
      else return null;
    });

    const nextItem4 = array?.find((item) => {
      if (item === array[next4]) return item;
      else return null;
    });

    const nextItem5 = array?.find((item) => {
      if (item === array[next5]) return item;
      else return null;
    });

    if (
      (nextItem1 === undefined &&
        nextItem2 === undefined &&
        nextItem3 === undefined &&
        nextItem4 === undefined &&
        nextItem5 === undefined) ||
      (nextItem1 === null &&
        nextItem2 === null &&
        nextItem3 === null &&
        nextItem4 === null &&
        nextItem5 === null)
    ) {
      const newArray = new Array([songURI]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    } else if (
      (nextItem2 === undefined &&
        nextItem3 === undefined &&
        nextItem4 === undefined &&
        nextItem5 === undefined) ||
      (nextItem2 === null &&
        nextItem3 === null &&
        nextItem4 === null &&
        nextItem5 === null)
    ) {
      const newArray = new Array([songURI, nextItem1]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    } else if (
      (nextItem3 === undefined &&
        nextItem4 === undefined &&
        nextItem5 === undefined) ||
      (nextItem3 === null && nextItem4 === null && nextItem5 === null)
    ) {
      const newArray = new Array([songURI, nextItem1, nextItem2]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    } else if (
      (nextItem4 === undefined && nextItem5 === undefined) ||
      (nextItem4 === null && nextItem5 === null)
    ) {
      const newArray = new Array([songURI, nextItem1, nextItem2, nextItem3]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    } else if (nextItem5 === undefined || nextItem5 === null) {
      const newArray = new Array([
        songURI,
        nextItem1,
        nextItem2,
        nextItem3,
        nextItem4,
      ]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    } else {
      const newArray = new Array([
        songURI,
        nextItem1,
        nextItem2,
        nextItem3,
        nextItem4,
        nextItem5,
      ]);
      dispatch(setSpotifySong(newArray[0]));
      console.log("new array", newArray[0]);
    }
  };

  const playAll = () => {
    const array = songs?.map((song) => {
      return song.uri;
    });

    dispatch(setSpotifySong(array));
  };

  useEffect(() => {
    dispatch(clearSpotifyMusic());
  }, [dispatch]);

  return (
    <div className="mainBoxPL">
      <button
        onClick={playAll}
        style={{
          marginLeft: "5px",
          border: "none",
          borderBottom: "1px solid grey",
          cursor: "pointer",
          maxHeight: "20px",
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
                onClick={() => {
                  playSong(song.uri);
                }}
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
