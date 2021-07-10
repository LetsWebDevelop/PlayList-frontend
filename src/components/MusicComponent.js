import { useDispatch } from "react-redux";

import { setSpotifySong } from "../store/playSong/actions";

import "./PlayListComponent.css";
import AddSongButton from "./AddSongButton";
import { deleteSong } from "../store/PlaylistByID/actions";

export default function MusicComponent(props) {
  const dispatch = useDispatch();

  const artistsTop50Array = props.dataTop50?.track?.artists?.map((artists) => {
    return artists.name;
  });

  const artistsSearchArray = props.dataSearch?.artists?.map((artists) => {
    return artists.name;
  });

  const addSong = props.dataTop50 || props.dataSearch;

  const addSongTop50 = props.dataTop50?.track;
  const addSongSearch = props.dataSearch;

  const space = ", ";
  const artistTop50 = artistsTop50Array?.join(space);
  const artistSearch = artistsSearchArray?.join(space);

  const songs = props.songs || props.top50Array || props.searchArray;

  const playSong = (songURI) => {
    const array = songs?.map((song) => {
      return song.uri || song.track.uri;
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

  return (
    <div className="musicBoxPL">
      <div
        onClick={() => {
          playSong(props.uri);
        }}
        className="playSongPL"
      >
        <img src={props.img} alt={props.title} />
      </div>
      <div className="songTitleArtistBoxPL">
        <div className="defaultTitleTextPL">{props.title}</div>
        <div className="defaultArtistTextPL">
          {props.artist || artistTop50 || artistSearch}
        </div>
        {addSong && (
          <AddSongButton
            tracks={addSongSearch}
            tracksTop50={addSongTop50}
            image={props.img}
          />
        )}
        {props.songs && (
          <button onClick={() => dispatch(deleteSong(props.id))}>test</button>
        )}
      </div>
    </div>
  );
}
