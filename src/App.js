import React from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda";
import Koin from "./pages/koin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Beranda} />
        <Route path="/koin" Component={Koin} />
      </Routes>
    </div>
  );
}

export default App;
