import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./pages/login";
import Beranda from "./pages/beranda";
import Campaign from "./pages/campaign";
import AddCampaign from "./pages/addCampaign";
import FotoDetail from "./pages/fotoDetail";
import Donatur from "./pages/donatur";
import NderekTanglet from "./pages/nderekTanglet";
import DetailChat from "./pages/detailChat";
import Berita from "./pages/berita"; 
import AddBerita from "./pages/addBerita";
import "bootstrap-icons/font/bootstrap-icons.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={login} />
        <Route path="/" Component={Beranda} />
        <Route path="/campaign" Component={Campaign} />
        <Route path="/addCampaign" Component={AddCampaign} />
        <Route path="/fotoDetail" Component={FotoDetail} />
        <Route path="/donatur" Component={Donatur} />
        <Route path="/nderekTanglet" Component={NderekTanglet} />
        <Route path="/detailChat" Component={DetailChat} />
        <Route path="/berita" Component={Berita} />
        <Route path="/addBerita" Component={AddBerita} />
      </Routes>
    </div>
  );
}

export default App;
