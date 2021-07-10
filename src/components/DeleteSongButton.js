import { deleteSong } from "../store/PlaylistByID/actions";
import { useDispatch } from "react-redux";

import "./ButtonStyles.css";

export default function DeleteSongButton(props) {
  const dispatch = useDispatch();
  return (
    <div className="addSongButtonBox">
      <button
        className="addSongButtonStyle"
        onClick={() => dispatch(deleteSong(props.id))}
      >
        Delete Song
      </button>
    </div>
  );
}
