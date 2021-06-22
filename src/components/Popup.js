import "./Popup.css"
import { selectPlaylists } from "../store/Playlists/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function Popup(props) {
const playlists = useSelector(selectPlaylists)

const artists = props.track.artists.map((artists) => {
  return artists.name
})

const title = props.track.name;
const image = props.track.album.images[2].url;
const uri = props.track.uri;
const origin = "Spotify";

const selectPlaylistHandler = () => {
  console.log("artists:", artists)
  console.log("title:", title)
  console.log("origin:", origin)
  console.log("uri:", uri)
  console.log("image:", image)
}



  return ( 
      <div className="popup-box">
        <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div>
           <h3 style={{ color: "green"}}>
             Select Playlist to add 
             </h3> 
          <p style={{fontWeight: "bold"}}>
            {props.track.name}
          </p>
          </div>
        {playlists.map((playlist) => {
        return (
          <div key={playlist.id} >
         <div className="selectPlaylist" onClick={selectPlaylistHandler}>
         <p>{playlist.name} {playlist.id}</p>
         </div>
        </div>
        )
        })}
      </div>
    </div>
  );
};