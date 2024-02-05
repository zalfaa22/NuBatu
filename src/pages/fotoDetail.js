import React from "react";
import "../css/fotodetail.css";
import DragDropFiles from "../components/grid";

export default function FotoDetail() {
  return (
    <div className="content">
      <div className="bungkus-foto">
        <div className="rinci">
          <div className="foto">
            <a href="/campaign" className="back">
              <img src="../../assets/arrow.svg" className="arrow"></img>
              <h1 className="back2">Kembali</h1>
            </a>
            <div className="button-kanan">
              <button className="save">Simpan Pengajuan</button>
              <button className="verifikasi">Verifikasi Program</button>
            </div>
          </div>
          <div className="umum-menu">
            <a href="/addCampaign" style={{ textDecoration: "none" }}>
              <p className="info-umum">Informasi Umum</p>
            </a>

            <button className="foto-detail">Foto Detail</button>
          </div>

          <div className="konten-putih">
            <div className="judul-gambar-detail">
              <div className="jud">
                <h1>
                  Gambar detail (3-5 diperlukan untuk mendapatkan persetujuan)
                </h1>
                <h2>
                  <img src="../../assets/seru.svg" className="seru"></img>
                  <p className="require">Require</p>
                </h2>
              </div>

              <DragDropFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
