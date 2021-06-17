import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectUserToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

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
      <h1 style={{ textAlign: "center" }}>Login Page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
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
          style={{ alignSelf: "center", marginTop: "5px" }}
        >
          Login
        </button>
        <div
          style={{
            alignSelf: "center",
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          <Link to="/signup">Signup here</Link>
        </div>
      </div>
    </div>
  );
}
