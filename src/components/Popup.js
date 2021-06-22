import "./Popup.css"
import { addSong } from "../store/PlaylistByID/actions";
import { selectPlaylists } from "../store/Playlists/selectors";
import { useDispatch, useSelector } from "react-redux";


export default function Popup(props) {
const playlists = useSelector(selectPlaylists)
const dispatch = useDispatch();

const artistlist = props.track.artists.map((artists) => {
  return artists.name
})
const space = ", "
const artist = artistlist.join(space)
const title = props.track.name;
const image = props.track.album.images[2].url;
const uri = props.track.uri;
const origin = "Spotify";

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
         <div className="selectPlaylist" onClick={() => 
          dispatch(addSong(title, artist, image, uri, origin, playlist.id ))}>
         <p>{playlist.name} {playlist.id}</p>
         </div>
        </div>
        )
        })}
      </div>
    </div>
  );
};