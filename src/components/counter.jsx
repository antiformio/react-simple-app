import React, { useState, useEffect } from "react";

function Counter({ counter, onDelete, onIncrement, onDecrement }) {
  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    return counter.value === 0 ? "Zero" : counter.value;
  }

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
      <button
        onClick={() => onDecrement(counter)}
        className="btn btn-dark btn-sm m-2"
      >
        -
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;
