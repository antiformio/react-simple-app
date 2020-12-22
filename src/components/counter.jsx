import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    return count === 0 ? "Zero" : count;
  }

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
