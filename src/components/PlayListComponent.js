import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useSelector } from "react-redux";

export default function PlayListComponent() {
  const playlist = useSelector(selectPlaylistByID);

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        {playlist.id}
        {" : "}
        {playlist.name}
      </p>
    </div>
  );
}
