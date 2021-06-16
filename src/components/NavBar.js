import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <NavLink to="/login" activeStyle={{ color: "lightgreen" }}>
        Login
      </NavLink>

      <NavLink to="/" activeStyle={{ color: "lightgreen" }} exact>
        HomePage
      </NavLink>
    </div>
  );
}
