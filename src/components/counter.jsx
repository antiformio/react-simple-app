import React, { useState, useEffect } from "react";

function Counter(props) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    //console.log(props);
    // This is not " nor ' its `
    //document.title = `You clicked ${value} times`;
  });

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    return value === 0 ? "Zero" : value;
  }

  return (
    <div>
      <h4>Counter number {props.id}</h4>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => setValue(value + 1)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button onClick={props.onDelete} className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
  );
}

export default Counter;
