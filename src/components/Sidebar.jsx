import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>My Application</h2>

      <nav>
        <NavLink to="/" className="sidebar-button">
          Home
        </NavLink>

        <NavLink to="/health" className="sidebar-button">
          Health Check
        </NavLink>

        <NavLink to="/about" className="sidebar-button">
          About
        </NavLink>
      </nav>

    </div>
  );
}

export default Sidebar;