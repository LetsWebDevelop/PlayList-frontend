import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <NavLink
        to="/"
        activeStyle={{ color: "lightgreen", marginTop: "20px" }}
        exact
      >
        PlayList()
      </NavLink>
    </div>
  );
}
