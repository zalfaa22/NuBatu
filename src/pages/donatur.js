import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "../css/donatur.css";
import Tabel from "../components/tabel";

export default function Donatur() {
  return (
    <div className="">
      <div>
        <Sidebar />
      </div>
      <div className="content" style={{ backgroundColor: "#EDF6F0" }}>
        <div className="bungkus-donatur">
          <div className="detail">
            <div className="donatur">
              <div className="kiri">
                <img src="../../assets/arrow.svg"></img>
                <h1 className="kembali">Kembali</h1>
              </div>
              <div className="kanan">
                <button className="simpan">Simpan Pengajuan</button>
                <button className="verif">Verifikasi Program</button>
              </div>
            </div>
            <div className="umum">
              <button className="info">Informasi Umum</button>
              <p>Foto Detail</p>
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
                    ></textarea>
                  </div>

                  <hr className="my-4" />

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
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="gambar">
                <h1>Gambar sampul</h1>
                <Tabel />
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
    </div>
  );
}
