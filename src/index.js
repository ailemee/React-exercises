import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Exercise1 from "./routes/exercise1";
import Exercise2 from "./routes/exercise2";
import Exercise3 from "./routes/exercise3";
import Exercise4 from "./routes/exercise4";
import Exercise5 from "./routes/exercise5";
import Exercise6 from "./routes/exercise6";
import Exercise7 from "./routes/exercise7";
import Exercise8 from "./routes/exercise8";
import Exercise9 from "./routes/exercise9";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="exercise1" element={<Exercise1 />} />
        <Route path="exercise2" element={<Exercise2 />} />
        <Route path="exercise3" element={<Exercise3 />} />
        <Route path="exercise4" element={<Exercise4 />} />
        <Route path="exercise5" element={<Exercise5 />} />
        <Route path="exercise6" element={<Exercise6 />} />
        <Route path="exercise7" element={<Exercise7 />} />
        <Route path="exercise8" element={<Exercise8 />} />
        <Route path="exercise9" element={<Exercise9 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
