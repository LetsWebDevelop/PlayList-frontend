import { useState } from "react"
import "./AddSongButton.css"
import Popup from "./Popup"

export default function AddSongButton(props) {
const [openPopup, setOpenPopup] = useState(false)


const togglePopup = () => {
    setOpenPopup(!openPopup)
    
}
    return (
        <div className="mainButtonBox">
            <button className="buttonStyle" onClick={togglePopup}>Add Song</button>
            {openPopup && <Popup 
            track={props.tracks}
         handleClose={togglePopup}
        />}
        </div>
    )
}