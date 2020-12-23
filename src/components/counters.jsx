import React, { useState, useEffect } from "react";
import Counter from "./counter";
import "../Counters.css";

function Counters({
  counters,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
  onAdd,
}) {
  const [showHideReset, setShowHideReset] = useState(false);

  // Show Hide the reset button depending of the existence of counters
  useEffect(() => {
    if (counters.length > 0) setShowHideReset(true);
    else setShowHideReset(false);
  });

  return (
    <div className="counters">
      <button onClick={() => onAdd()} className="btn btn-success btn-sm">
        Add Counter
      </button>

      {showHideReset && (
        <button
          onClick={() => onReset()}
          className="btn btn-primary btn-sm ml-2"
        >
          Reset
        </button>
      )}

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}

export default Counters;
