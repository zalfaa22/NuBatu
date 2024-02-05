import React from "react";
import "../css/campaign.css";
import Button from "react-bootstrap/Button";

export default function Campaign() {
  return (
    <div className="content">
      <div className="luar">
        <div className="koin">
          <div className="program">Program</div>
          <div className="kanan">
            <a href="/addCampaign" className="pencet">
              Tambah Program
              <img src="../../assets/add.png" alt="add" className="add" />
            </a>

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

        <div className="cover-table">
          <div class="table-container-berita">
            <table class="table custom-table">
              <thead>
                <tr className="title">
                  <th scope="col" style={{ padding: "1rem" }}>
                    Nama
                  </th>
                  <th scope="col" style={{ padding: "1rem" }}>
                    Status
                  </th>
                  <th scope="col" style={{ padding: "1rem" }}>
                    Inisiator
                  </th>
                  <th scope="col" style={{ padding: "1rem", textAlign: "end" }}>
                    Dana yang diajukan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className=" d-flex p-3 align-items-center">
                    <img src="../assets/program3.svg" className="pe-3"></img>
                    <div className="d-block ">
                      <span className="title fw-semibold pt-5">
                        Zakat Untuk Pendidikan Santri Pelosok
                      </span>
                      <div className="title fw-lighter d-flex  pt-1">
                        <a href="#">
                          <button className="edit-btn">
                            <img src="../assets/edit.svg" />
                            <span className="ms-1">edit</span>
                          </button>
                        </a>
                        <div className="ms-4">
                          <a href="#">
                            <button className="del-btn">
                              <img src="../assets/delete.svg" />
                              <span className="ms-1">hapus</span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div className="pt-2 me-5">
                      <img src="../assets/disetujui.svg" className=""></img>
                      {/* Disetujui */}
                    </div>
                  </td>
                  <td className="text-1 fw-normal py-3">PCNU Batu</td>
                  <td className="text-1 fw-slug text-end py-3">
                    Rp100.000.000
                  </td>
                </tr>
                <tr>
                  <th scope="row" className=" d-flex p-3 align-items-center">
                    <img src="../assets/program2.svg" className="pe-3"></img>
                    <div className="d-block ">
                      <span className="title fw-semibold">
                        Hadirkan kebahagiaan melalui sedekah pangan
                      </span>
                      <div className="title fw-lighter d-flex pt-1">
                        <div>
                          <a href="#">
                            <button className="edit-btn">
                              <img src="../assets/edit.svg" />
                              <span className="ms-1">edit</span>
                            </button>
                          </a>
                        </div>
                        <div className="ms-4">
                          <a href="#">
                            <button className="del-btn">
                              <img src="../assets/delete.svg" />
                              <span className="ms-1">hapus</span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div className="pt-2 me-5">
                      <img src="../assets/pengajuan.svg" className=""></img>
                    </div>
                  </td>
                  <td className="text-1 fw-normal py-3">Indah Wahyuni</td>
                  <td className="text-1 fw-slug text-end p-3">Rp10.000.000</td>
                </tr>
                <tr>
                  <th scope="row" className=" d-flex p-3 align-items-center">
                    <img src="../assets/program1.svg" className="pe-3"></img>
                    <div className="d-block ">
                      <span className="title fw-semibold">Pahala ABADI</span>
                      <div className="title fw-lighter d-flex pt-1">
                        <div>
                          <a href="#">
                            <button className="edit-btn">
                              <img src="../assets/edit.svg" />
                              <span className="ms-1">edit</span>
                            </button>
                          </a>
                        </div>
                        <div className="ms-4">
                          <a href="#">
                            <button className="del-btn">
                              <img src="../assets/delete.svg" />
                              <span className="ms-1">hapus</span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div className="pt-2 me-5">
                      <img src="../assets/ditolak.svg" className=""></img>
                    </div>
                  </td>
                  <td className="text-1 fw-normal py-3">Andi Aziz</td>
                  <td className="text-1 fw-slug text-end p-3">Rp50.000.000</td>
                </tr>

                <tr>
                  <th colspan="3" className="text-1 fw-normal ps-3 pt-3">
                    Page 1 of 1
                  </th>
                  <td className="text-end p-3 d-flex pe-3 justify-content-end">
                    <Button variant="outline-secondary fw-medium" size="sm">
                      Previous
                    </Button>{" "}
                    <Button
                      variant="outline-secondary ms-2 fw-medium"
                      size="sm"
                    >
                      Next
                    </Button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
