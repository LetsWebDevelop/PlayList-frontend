import { useDispatch } from "react-redux";

import { setSpotifySong } from "../store/playSong/actions";
import "./ButtonStyles.css";

export default function PlayAllButton(props) {
  const dispatch = useDispatch();

  const playAllMusic = () => {
    const array = props.playAll;

    dispatch(setSpotifySong(array));
  };

  return (
    <div>
      <button className="playAllButton" onClick={playAllMusic}>
        Play All
      </button>
    </div>
  );
}
