import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearSpotifyMusic } from "../store/spotifyMusic/actions";

import "./PlayListComponent.css";
import MusicComponent from "./MusicComponent";
import { setSpotifySong } from "../store/playSong/actions";

export default function PlayListComponent() {
  const [uri, setUri] = useState("");
  const playlist = useSelector(selectPlaylistByID);
  const songs = playlist.songs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSpotifyMusic());
    dispatch(setSpotifySong(uri));
  });

  return (
    <div className="mainBoxPL">
      {songs?.map((song) => {
        return (
          <div key={song.id}>
            <div className="musicBoxPL">
              <div onClick={() => setUri(song.uri)} className="playSongPL">
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
