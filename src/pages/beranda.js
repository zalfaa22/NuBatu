import React, { useState } from "react";
import "../css/beranda.css";

export default function Beranda() {
  return (
      <div className="content">
        <div className="cover">
          <div className="bungkus">
            <h1 className="judul">Nahdlatul Ulama (NU)</h1>
            <h2 className="deskripsi">
              Didirikan pada 31 Januari 1926 di Surabaya oleh Kiai Haji Hasyim
              Asy'ari sebagai respons terhadap pergerakan modernis dan
              penjajahan Belanda, menegaskan misi untuk mempertahankan tradisi
              Islam. Selama era penjajahan, NU aktif dalam perjuangan melawan
              penjajah dan mendukung kemerdekaan Indonesia. Setelah kemerdekaan
              pada tahun 1945, NU terus memainkan peran penting dalam
              pembentukan negara dan masyarakat, tidak hanya dalam ranah
              keagamaan, tetapi juga berperan aktif dalam kegiatan sosial dan
              mendukung kesejahteraan umat.
            </h2>
            <button>Read More</button>
          </div>
          <img className="img-nu" src="../../assets/NU.png" alt="NU" />
        </div>
      </div>
  );
}
