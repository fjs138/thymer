import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stopwatch from "./routes/stopwatch";
import Timer from "./routes/timer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="stopwatch" element={<Stopwatch />} />
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
