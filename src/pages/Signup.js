import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectUserToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

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
      <h1 style={{ textAlign: "center" }}>Signup Page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Username"
          required
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="email"
          required
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="password"
          required
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <button
          type="submit"
          onClick={submitForm}
          style={{ alignSelf: "center", cursor: "pointer" }}
        >
          Submit
        </button>
        <div
          style={{ fontSize: "12px", alignSelf: "center", marginTop: "5px" }}
        >
          <Link to="/login">Click here to log in</Link>
        </div>
      </div>
    </div>
  );
}
