import Navbar from "./components/navbar";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.StrictMode>
  );
}

export default App;
