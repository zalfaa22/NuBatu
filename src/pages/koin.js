import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "../css/koin.css";

export default function Koin() {
  return (
    <div className="">
      <div>
        <Sidebar />
      </div>
      <div className="content" style={{ backgroundColor: "#EDF6F0" }}>
        <div className="luar">
          <div className="koin">
            <div className="program">Program</div>
            <div className="kanan">
              <button className="pencet">
                Tambah Program
                <img src="../../assets/add.png" alt="add" className="add" />
              </button>
              <img src="../../assets/profil.png" className="profil"></img>
            </div>
          </div>

          <div className="option">
            <div className="campaign">
              <button className="satu">Campaign Program</button>
              <h1>Disetujui</h1>
              <h1>Pengajuan</h1>
              <h1>Ditolak</h1>
            </div>
            <button className="search">
              Pencarian
              <img src="../../assets/search.svg" className="cari"></img>
            </button>
          </div>

          <table class="table">
            <thead>
              <tr className="bung-nama">
                <th scope="col" className="nama">
                  Nama
                </th>
                <th scope="col" className="nama">
                  Status
                </th>
                <th scope="col" className="nama">
                  Inisator
                </th>
                <th scope="col" className="nama">
                  Dana yang diajukan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="tampil">
                    <img src="../../assets/program3.svg" className="p3"></img>
                    <div className="text">
                      <h1 className="zakat">
                        Zakat Untuk Pendidikan Santri Pelosok
                      </h1>
                      <h2 className="crud">
                        <div className="but-edit">
                          <img
                            src="../../assets/edit.svg"
                            className="edit"
                          ></img>
                          <div>Edit</div>
                        </div>
                        <div className="but-hapus">
                          <img
                            src="../../assets/delete.svg"
                            className="edit"
                          ></img>
                          <div>Hapus</div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </th>
                <td>
                  <div className="bung-but">
                    <button className="sukses">
                      <img src="../../assets/dot-h.png" className="dot"></img>
                      Disetujui
                    </button>
                  </div>
                </td>
                <td className="batu">PCNU Batu</td>
                <td className="uang">Rp. 100.000.000</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="tampil">
                    <img src="../../assets/program2.svg" className="p3"></img>
                    <div className="text">
                      <h1 className="zakat">
                        Hadirkan Kebahagiaan Melalui Sedekah Pangan
                      </h1>
                      <h2>
                        <div className="but-edit">
                          <img
                            src="../../assets/edit.svg"
                            className="edit"
                          ></img>
                          <div>Edit</div>
                        </div>
                        <div className="but-hapus">
                          <img
                            src="../../assets/delete.svg"
                            className="edit"
                          ></img>
                          <div>Hapus</div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </th>
                <td>
                  <div className="bung-but">
                    <button className="pengajuan">
                      <img src="../../assets/dot-o.png" className="dot"></img>
                      Pengajuan
                    </button>
                  </div>
                </td>
                <td className="batu">Indah Wahyuni</td>
                <td className="uang">Rp. 10.000.000</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="tampil">
                    <img src="../../assets/program1.svg" className="p3"></img>
                    <div className="text">
                      <h1 className="zakat">Pahala ABADI</h1>
                      <h2>
                        <div className="but-edit">
                          <img
                            src="../../assets/edit.svg"
                            className="edit"
                          ></img>
                          <div>Edit</div>
                        </div>
                        <div className="but-hapus">
                          <img
                            src="../../assets/delete.svg"
                            className="edit"
                          ></img>
                          <div>Hapus</div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </th>
                <td>
                  <div className="bung-but">
                    <button className="ditolak">
                      <img src="../../assets/dot-m.png" className="dot"></img>
                      Ditolak
                    </button>
                  </div>
                </td>
                <td className="batu">Andi Aziz</td>
                <td className="uang">Rp. 50.000.000</td>
              </tr>
              <tr>
                <td colSpan="4" className="page-row">
                  <div className="page">
                    <h1 className="one">Page 1 of 1</h1>
                    <h2 className="two">
                      <button className="prev">Previous</button>
                      <button className="next">Next</button>
                    </h2>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
