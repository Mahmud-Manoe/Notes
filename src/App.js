import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Notes from "./pages";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="notes" element={<Notes />} />
          <Route path="/" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

reportWebVitals()
export default App;
