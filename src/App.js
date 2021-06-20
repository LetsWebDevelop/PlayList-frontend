import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SpotifyRedirect from "./pages/SpotifyRedirect";
import { setSpotifyToken, spotifyLogOut } from "./store/spotifyToken/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    const spotifyToken = localStorage.getItem("spotifyToken");
    if (!spotifyToken) {
      dispatch(spotifyLogOut());
    } else {
      dispatch(setSpotifyToken(spotifyToken));
    }
  }, [dispatch]);

  return (
    <div style={{ maxHeight: "99vh", minHeight: "99vh", overflow: "hidden" }}>
      <NavBar />
      <Switch>
        <Route path="/loading" component={Loading} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/spotifyredirect" component={SpotifyRedirect} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
