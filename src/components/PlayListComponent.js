import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearSpotifyMusic } from "../store/spotifyMusic/actions";

export default function PlayListComponent() {
  const playlist = useSelector(selectPlaylistByID);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSpotifyMusic())
  })

  return (
    <div>
      <p>
        {playlist.id}
        {" "}
        {playlist.name}
      </p>
    </div>
  );
}
