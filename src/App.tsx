import React from "react";
import "./App.css";
import { AddRecord } from "./components/AddRecords";
import { Balance } from "./components/Balance";
import { History } from "./components/History";

function App() {
  return (
    <div className="App">
      <Balance />
      <AddRecord />
      <History />
    </div>
  );
}

export default App;
