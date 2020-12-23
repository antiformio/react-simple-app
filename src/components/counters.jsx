import React from "react";
import Counter from "./counter";

function Counters({ counters, onDelete, onIncrement, onReset }) {
  return (
    <div>
      <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
}

export default Counters;
