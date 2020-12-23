import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import Counter from "./counter";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterID) => {
    // Here basicly we just create a new array, and filter out the
    //    element we want to delete. Then we set this new array as the
    //    current array.
    console.log(counterID);
    setCounters(counters.filter((counter) => counter.id !== counterID));
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Counters;
