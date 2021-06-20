import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { spotifyLogOut } from "../store/spotifyToken/actions";

export const Timer = () => {
  const minutes = Math.floor((1000 * 60 * 60) / (1000 * 60));
  const [counter, setCounter] = useState(minutes);
  const dispatch = useDispatch();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 60000);
    counter === 0 && dispatch(spotifyLogOut());
    localStorage.setItem("counter", counter);
  }, [counter, dispatch]);

  return (
    <div>
      <div style={{ fontSize: "10px", marginBottom: "1px" }}>
        Spotify Token expires in: {counter}min
      </div>
    </div>
  );
};
