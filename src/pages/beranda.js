import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button"; // Correct import statement for Bootstrap Button
import '../css/beranda.css';

export default function Beranda() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {/* Sidebar */}
        {toggle && (
          <div
            className="sidebar col-md-2 vh-100 position-fixed" style={{ backgroundColor: "#060313" }}>
            <Sidebar />
          </div>
        )}

        {/* Empty column for spacing when the sidebar is not visible */}
        {toggle && <div className="col-md-2"></div>}

        {/* Main content column */}
        <div
          className={`col p-0 vh-100 ${
            toggle ? "offset-md-2 col-md-10" : "col-md-12"
          }`}
          style={{ backgroundColor: "#EDF6F0" }}
        >
          <Nav Toggle={Toggle} />
          <div className='cover'>
            <div className='bungkus'>
              <h1 className='judul'>Nahdlatul Ulama (NU)</h1>
              <h2 className='deskripsi'>Didirikan pada 31 Januari 1926 di Surabaya oleh Kiai Haji Hasyim Asy'ari sebagai respons terhadap pergerakan modernis dan penjajahan Belanda, menegaskan misi untuk mempertahankan tradisi Islam. Selama era penjajahan, NU aktif dalam perjuangan melawan penjajah dan mendukung kemerdekaan Indonesia. Setelah kemerdekaan pada tahun 1945, NU terus memainkan peran penting dalam pembentukan negara dan masyarakat, tidak hanya dalam ranah keagamaan, tetapi juga berperan aktif dalam kegiatan sosial dan mendukung kesejahteraan umat.</h2>
              <button>Read More</button>
            </div>
      
            <img src='../../assets/NU.png' alt='NU' />
          </div>
        </div>
      </div>
    </div>
  );
}
