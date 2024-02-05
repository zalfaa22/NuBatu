import React from "react";
import "../css/addcampaign.css";
import DropzoneComponent from "../components/dropzone";

export default function AddCampaign() {
  return (
    <div className="content">
      <div className="bungkus-donatur">
        <div className="detail">
          <div className="donatur">
            <a href="/campaign" className="kiri">
              <img src="../../assets/arrow.svg" alt="arrow" className="arrow" />
              <h1 className="kembali">Kembali</h1>
            </a>

            <div className="button-atas-kanan">
              <button className="simpan">Simpan Pengajuan</button>
              <button className="verif">Verifikasi Program</button>
            </div>
          </div>
          <div className="umum">
            <button className="info">Informasi Umum</button>
            <a href="/fotoDetail" style={{ textDecoration: "none" }}>
              <p>Foto Detail</p>
            </a>
          </div>

          <div className="putih">
            <div className="form">
              <div className="judul">Detail Program</div>
              <form className="nam-prog">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nama Program
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Nama Program"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Deskripsi
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleInputPassword1"
                    aria-describedby="emailHelp"
                    placeholder="E.g. Deskripsi Detail"
                    style={{ fontSize: "16px" }}
                  ></textarea>
                </div>

                <hr className="my-2" />

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Dana yang diajukan
                  </label>
                  <div class="input-group">
                    <img
                      src="../../assets/rp.svg"
                      alt="Currency Icon"
                      class="input-group-text custom-icon"
                    />
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="0"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="gambar">
              <h1>Gambar sampul</h1>

              <DropzoneComponent />
              <div className="inisiator">
                <h2>Inisiator</h2>
                <h3>
                  <img src="../../assets/profil-donatur.svg"></img>
                  <p>Administrator</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
