import React from "react";
import { Route, Routes } from "react-router-dom";
import Berita from "./pages/berita"; 
import login from "./pages/login";
import "bootstrap-icons/font/bootstrap-icons.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={login} />
        <Route path="/berita" Component={Berita} />
      </Routes>
    </div>
  );
}

export default App;
