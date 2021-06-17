import { Link } from "react-router-dom";

export default function LoginPage() {
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
          type="email"
          placeholder="email"
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <input
          type="password"
          placeholder="password"
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <button style={{ alignSelf: "center", marginTop: "5px" }}>Login</button>
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
