import { useState } from "react";
import "./ButtonStyles.css";
import Popup from "./Popup";

export default function AddSongButton(props) {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <div className="addSongButtonBox">
      <button className="addSongButtonStyle" onClick={togglePopup}>
        Add Song
      </button>
      {openPopup && (
        <Popup
          track={props.tracks}
          top50Track={props.tracksTop50}
          image={props.image}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
