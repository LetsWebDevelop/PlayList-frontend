import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearSpotifyMusic } from "../store/spotifyMusic/actions";

import "./MusicComponent.css"
import MusicComponent from "./MusicComponent"
import { setSpotifySong } from "../store/playSong/actions";

export default function PlayListComponent() {
  const [uri, setUri] = useState("")
  const playlist = useSelector(selectPlaylistByID);
  const songs = playlist.songs
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSpotifyMusic())
    dispatch(setSpotifySong(uri))
    console.log("check:", playlist)
  })

  return (
        <div className="mainBox">
        {songs?.map((song) => {
          return (
            <div key={song.id}>
              <div className="musicBox">
                <div onClick={() => setUri(song.uri)} className="playSong">
                  <MusicComponent img={song.image} />
                </div>
                <div className="songTitleArtistBox">
                  <div className="defaultTitleText">
                    <MusicComponent title={song.title} />
                  </div>
                  <div className="defaultArtistText">
                    <MusicComponent artist={song.artist} />
                  </div>
              </div> 
            </div>
          </div>
      )
    })}
    </div>
   
  );
}
