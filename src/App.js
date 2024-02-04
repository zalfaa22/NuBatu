import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import login from "./pages/login";
import Beranda from "./pages/beranda";
import Koin from "./pages/koin";
import tabel from "./components/tabel";
import Donatur from "./pages/donatur";
import Berita from "./pages/konten/berita"; 
import AddBerita from "./pages/konten/addBerita";
import Artikel from "./pages/konten/artikel";
import Event from "./pages/konten/event";
import Pengaturan from "./pages/pengaturan";
import "bootstrap-icons/font/bootstrap-icons.css"


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" Component={login} />
        <Route path="/beranda" Component={Beranda} />
        <Route path="/koin" Component={Koin} />
        <Route path="/tabel" Component={tabel} />
        <Route path="/donatur" Component={Donatur} />
        <Route path="/berita" Component={Berita} />
        <Route path="/addBerita" Component={AddBerita} />
        <Route path="/artikel" Component={Artikel} />
        <Route path="/event" Component={Event} />
        <Route path="/pengaturan" Component={Pengaturan} />
      </Routes>
    </div>
  );
}

export default App;
