import React from "react";
import { Route, Routes } from "react-router-dom";
import Berita from "./pages/berita"; 
import login from "./pages/login";
import Beranda from "./pages/beranda";
import Koin from "./pages/koin";
import "bootstrap-icons/font/bootstrap-icons.css"
import tabel from "./components/tabel";
import Donatur from "./pages/donatur";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={login} />
        <Route path="/" Component={Beranda} />
        <Route path="/koin" Component={Koin} />
        <Route path="/berita" Component={Berita} />
        <Route path="/tabel" Component={tabel} />
        <Route path="/donatur" Component={Donatur} />
      </Routes>
    </div>
  );
}

export default App;
