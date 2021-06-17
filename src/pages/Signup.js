export default function SignupPage() {
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
          type="text"
          placeholder="username"
          style={{ textAlign: "center", alignSelf: "center" }}
        ></input>
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
        <button style={{ alignSelf: "center" }}>Submit</button>
      </div>
    </div>
  );
}
