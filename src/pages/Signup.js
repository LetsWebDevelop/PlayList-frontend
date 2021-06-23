import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectUserToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import "./Signup.css"

export default function SignupPage() {
  const [userName, setUserName] = useState("");
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

    dispatch(signUp(userName, email, password));

    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={submitForm} >
      <div
       className="mainBoxSignup"
      >

        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Username"
          required
          className="alignSelfSignup"
          ></input>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="email"
          required
          className="alignSelfSignup"
        ></input>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="password"
          required
          className="alignSelfSignup"
        ></input>
        <button
          type="submit"
          onClick={submitForm}
          className="signupButton"
          >
          Submit
        </button>
        <div
          className="LinkSignup"
          >
          <Link to="/login" className="noDecorationSignup">Click here to log in</Link>
        </div>
      </div>
    </form>
    </div>
  );
}
