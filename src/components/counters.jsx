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

  function handleDelete(params) {
    console.log("teste");
    return 0;
  }

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          id={counter.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Counters;
