import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "./configs/routes.config";

const App = () => (
  <BrowserRouter>
    <NavBar />

    <Routes>
      {routesConfig.map(({ element, path, title }, index) => (
        <Route path={path} element={element} key={`Route${index}_${title}`} />
      ))}
      <Route></Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
