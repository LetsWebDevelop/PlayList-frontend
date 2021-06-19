import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SpotifyRedirect from "./pages/SpotifyRedirect";
import { setSpotifyToken } from "./store/spotifyToken/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    const spotifyToken = localStorage.getItem("spotifyToken");
    if (!spotifyToken) {
      return null;
    } else {
      return dispatch(setSpotifyToken(spotifyToken));
    }
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/spotifyredirect" component={SpotifyRedirect} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
