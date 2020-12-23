import React, { useEffect } from "react";
import "../Navbar.css";

function NavBar({ totalCountersGreaterThanZero }) {
  useEffect(() => {
    // This is not " nor ' its `
    document.title =
      totalCountersGreaterThanZero > 0
        ? `There are ${totalCountersGreaterThanZero} active counters`
        : `No active counters`;
  });

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
