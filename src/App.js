import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./pages/login";
import Beranda from "./pages/beranda";
import Koin from "./pages/koin";
import tabel from "./components/tabel";
import Donatur from "./pages/donatur";
import Berita from "./pages/berita"; 
import AddBerita from "./pages/addBerita";
import "bootstrap-icons/font/bootstrap-icons.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={login} />
        <Route path="/" Component={Beranda} />
        <Route path="/koin" Component={Koin} />
        <Route path="/tabel" Component={tabel} />
        <Route path="/donatur" Component={Donatur} />
        <Route path="/berita" Component={Berita} />
        <Route path="/addBerita" Component={AddBerita} />
      </Routes>
    </div>
  );
}

export default App;
