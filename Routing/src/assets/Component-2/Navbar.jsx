import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/About" className={({ isActive }) => (isActive ? "active-link" : "")}
            
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}
            
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};



export default Navbar;



