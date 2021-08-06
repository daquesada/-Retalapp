import React from "react";
import "./App.css";
import { AddRecord } from "./components/AddRecords";
import { Balance } from "./components/Balance";
import { History } from "./components/History";
import { useLoadData } from "./hooks/useLoadData";

function App() {
  useLoadData();

  return (
    <div className="App">
      <h1>My Account</h1>
      <Balance />
      <AddRecord />
      <History />
    </div>
  );
}

export default App;
