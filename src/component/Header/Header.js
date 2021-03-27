import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/Group 1329.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li style={{ marginRight: "420px" }}>
            <img style={{ width: "150px" }} src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/donation">Donation</Link>
          </li>
          <li>Events</li>
          <li style={{ backgroundColor: "orange", padding: "5px" }}>
            <Link to="/login">Register</Link>
          </li>
          <li>
            <button style={{ backgroundColor: "orange", color: "white" }}>
              Admin
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
