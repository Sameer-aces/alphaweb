import React, { useContext } from "react";
import { Routes, Route, Switch, Router } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
