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
import BeritaItem from "./pages/konten/beritaItem";
import EditBerita from "./pages/konten/editBerita";
import Artikel from "./pages/konten/artikel";
import Event from "./pages/konten/event";
import Pengaturan from "./pages/pengaturan";
import Defaulthideshow from "./pages/coba";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/beranda" element={<Beranda/>} />
          <Route path="/campaign" element={<Campaign/>} />
          <Route path="/addCampaign" element={<AddCampaign/>} />
          <Route path="/fotoDetail" element={<FotoDetail/>} />
          <Route path="/donatur" element={<Donatur/>} />
          <Route path="/nderekTanglet" element={<NderekTanglet/>} />
          <Route path="/detailChat" element={<DetailChat/>} />
          <Route path="/berita" element={<Berita/>} />
          <Route path="/addBerita" element={<AddBerita/>} />
          <Route path="/editBerita/:id" element={<AddBerita/>} />
          <Route path="/beritaItem" element={<BeritaItem/>} />
          <Route path="/editBerita" element={<EditBerita/>} />
          <Route path="/artikel" element={<Artikel/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/pengaturan" element={<Pengaturan/>} />
          <Route path="/coba" element={<Defaulthideshow/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
