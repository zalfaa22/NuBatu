import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Login from "./pages/login";
import Beranda from "./pages/beranda";
import Campaign from "./pages/campaign";
import AddCampaign from "./pages/addCampaign";
import FotoDetail from "./pages/fotoDetail";
import Donatur from "./pages/donatur";
import NderekTanglet from "./pages/nderekTanglet";
import DetailChat from "./pages/detailChat";
import Berita from "./pages/konten/berita";
import AddBerita from "./pages/konten/addBerita";
import EditBerita from "./pages/konten/editBerita";
import Artikel from "./pages/konten/artikel";
import Event from "./pages/konten/event";
import Pengaturan from "./pages/pengaturan";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" Component={Login} />
        </Routes>
      </div>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/beranda" Component={Beranda} />
          <Route path="/campaign" Component={Campaign} />
          <Route path="/addCampaign" Component={AddCampaign} />
          <Route path="/fotoDetail" Component={FotoDetail} />
          <Route path="/donatur" Component={Donatur} />
          <Route path="/nderekTanglet" Component={NderekTanglet} />
          <Route path="/detailChat" Component={DetailChat} />
          <Route path="/berita" Component={Berita} />
          <Route path="/addBerita" Component={AddBerita} />
          <Route path="/editBerita" Component={EditBerita} />
          <Route path="/artikel" Component={Artikel} />
          <Route path="/event" Component={Event} />
          <Route path="/pengaturan" Component={Pengaturan} />
        </Routes>
      </div>
    </>
  );
}

export default App;
