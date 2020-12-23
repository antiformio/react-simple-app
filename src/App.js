import Navbar from "./components/navbar";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

function App() {
  const [counters, setCounters] = useState([]);

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          id: counter.id,
          value: 0,
          // Or just value: 0:
          // return value;
        };
      })
    );
  };

  const handleDelete = (counterID) => {
    // Here basicly we just create a new array, and filter out the
    //    element we want to delete. Then we set this new array as the
    //    current array.
    setCounters(counters.filter((counter) => counter.id !== counterID));
  };

  const handleIncrement = (counterToBeUpdated) => {
    // Use counters.map to iterate over the elements and update the required counter.
    //    This will return a new array and setCounters set this as the new current array.
    setCounters(
      counters.map((counter) =>
        counter.id === counterToBeUpdated.id
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };

  const handleDecrement = (counterToBeUpdated) => {
    setCounters(
      counters.map((counter) =>
        counter.id === counterToBeUpdated.id && counterToBeUpdated.value > 0
          ? { ...counter, value: counter.value - 1 }
          : counter
      )
    );
  };

  const handleAdd = () => {
    // If state array is empty return lastId = 0 else return the last id
    const lastId = counters.length === 0 ? 0 : counters[counters.length - 1].id;

    // Concat does not change the original array, instead IT RETURNS A NEW ONE
    //  This is the proper way to use setState, we should NEVER
    //    modify state directly.
    setCounters(counters.concat({ id: lastId + 1, value: 0 }));
  };

  return (
    <React.StrictMode>
      <Navbar
        totalCountersGreaterThanZero={
          counters.filter((counter) => counter.value > 0).length
        }
      />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onDecrement={handleDecrement}
        />
      </main>
    </React.StrictMode>
  );
}

export default App;
