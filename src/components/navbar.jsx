import React, { useState } from "react";

function NavBar({ totalCountersGreaterThanZero }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCountersGreaterThanZero}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
