import React, { useState } from "react";
import "../Navbar.css";

function NavBar({ totalCountersGreaterThanZero }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand organize" href="#">
        <h4>Active Counters </h4>
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCountersGreaterThanZero}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
