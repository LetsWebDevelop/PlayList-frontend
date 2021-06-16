import SpotifyLoginButton from "../spotify/LoginButton";

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
          type="text"
          placeholder="email"
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <input
          type="password"
          placeholder="password"
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SpotifyLoginButton />
        </div>
      </div>
    </div>
  );
}
