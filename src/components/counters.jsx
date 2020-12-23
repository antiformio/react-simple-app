import React from "react";
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
  return (
    <div className="counters">
      <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <button onClick={() => onAdd()} className="btn btn-success btn-sm">
        Add Counter
      </button>
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
