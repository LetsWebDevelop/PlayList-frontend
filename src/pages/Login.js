import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectUserToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  const history = useHistory();

  useEffect(() => {
    if (userToken !== null) {
      history.push("/");
    }
  }, [userToken, history]);

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login to PlayList</h1>

      <form onSubmit={submitForm}>
        <div className="mainBoxLogin">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            required
            className="alignSelf"
          ></input>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
            required
            className="alignSelf"
          ></input>
          <button type="submit" onClick={submitForm} className="loginButton">
            Login
          </button>
          <div className="Link">
            <Link to="/signup" className="noDecoration">
              Signup here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
