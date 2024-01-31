import React from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Beranda} />
      </Routes>
    </div>
  );
}

export default App;
