import SpotifyLoginButton from "../spotify/LoginButton";

export default function LoginPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <SpotifyLoginButton />
        </div>
      </div>
    </div>
  );
}
