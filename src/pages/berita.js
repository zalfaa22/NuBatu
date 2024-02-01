import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";
import "../css/berita.css";

export default function Berita() {
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
            className="sidebar col-md-2 vh-100 position-fixed"
            style={{ backgroundColor: "#060313" }}
          >
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
          <div className="px-3 px-md-4 py-md-4">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <h2 className="fs-2 fw-bold">Berita</h2>
                <div className="d-flex">
                    <Button href="/addBerita" variant="success" size="lg" className="mt-1 me-3">Tambah Program
                    <img src='../../assets/berita/plus.svg' alt='add' className="ms-2" />
                    </Button>{' '}
                <img src="../assets/berita/profile.svg" />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="d-flex justify-content-between">
                <div>
                  <Button variant="outline-success fs-6 fw-semibold text-black" className="berita-btn">
                    Success
                  </Button>{" "}
                  <Button variant="outline-success-none fs-6 fw-semibold text-black" >
                    Draft
                  </Button>{" "}
                  <Button variant="outline-success-none fs-6 fw-semibold text-black">
                    Publish
                  </Button>{" "}
                </div>
                <div className="">
                  <Button variant="outline-success fs-6 fw-semibold text-black" className="berita-btn">
                    Pencarian
                    <img
                      className="ms-2"
                      src="../assets/search-normal.svg"
                      alt="Search"
                    />
                  </Button>{" "}
                </div>
              </div>
            </div>
            <div className="">

            <div class="table-container">
<table class="table custom-table">
                <thead>
                  <tr className="title">
                    <th scope="col" style={{padding: "1rem"}}>Judul</th>
                    <th scope="col" style={{padding: "1rem"}}>Status</th>
                    <th scope="col" style={{padding: "1rem"}}>Jurnalis</th>
                    <th scope="col" style={{padding: "1rem", textAlign: "end"}}>Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                      <img src="../assets/berita/1.svg" className="pe-3"></img>
                      <div className="d-block ">
                        <span className="title fw-semibold pt-5">
                        Kick Off Resepsi 1 Abad, PCNU Kota Batu Siapkan Beragam ...
                        </span>
                        <div className="title fw-lighter d-flex  pt-1">
                          <a href="#">
                          <button className="edit-btn">
                          <img src="../assets/berita/edit-icon.svg" />
                          <span className="ms-1">edit</span>
                          </button></a>
                          <div className="ms-4">
                          <a href="#">
                          <button className="del-btn">
                          <img src="../assets/berita/trash-icon.svg" />
                          <span className="ms-1">hapus</span>
                          </button></a>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                    <div className="pt-2 me-5">
                            <img src="../assets/berita/draft.svg" className=""></img>
                            {/* Disetujui */}
                        </div>
                    </td>
                    <td className="text-1 fw-normal py-3">W. Nadia</td>
                    <td className="text-1 fw-slug text-end py-3">Okt 05, 2023</td>
                  </tr>
                  <tr>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                      <img src="../assets/berita/2.svg" className="pe-3"></img>
                      <div className="d-block ">
                        <span className="title fw-semibold">
                        Kick Off Resepsi 1 Abad, PCNU Kota Batu Siapkan Beragam ...
                        </span>
                        <div className="title fw-lighter d-flex pt-1">
                          <div>
                          <a href="#">
                          <button className="edit-btn">
                          <img src="../assets/berita/edit-icon.svg" />
                          <span className="ms-1">edit</span>
                          </button></a>
                          </div>
                          <div className="ms-4">
                          <a href="#">
                          <button className="del-btn">
                          <img src="../assets/berita/trash-icon.svg" />
                          <span className="ms-1">hapus</span>
                          </button></a>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                    <div className="pt-2 me-5">
                            <img src="../assets/berita/publish.svg" className=""></img>
                        </div>
                    </td>
                    <td className="text-1 fw-normal py-3">AH Baharuddin</td>
                    <td className="text-1 fw-slug text-end p-3">Okt 05, 2023</td>
                  </tr>
                  
                  <tr>
                    <th colspan="3" className="text-1 fw-normal ps-3 pt-3">Page 1 of 1</th>
                    <td className="text-end p-3 d-flex pe-3 justify-content-end">
                    <Button variant="outline-secondary fw-medium" size="sm">Previous</Button>{' '}
                    <Button variant="outline-secondary ms-2 fw-medium" size="sm">Next</Button>{' '}
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

            {/* <div className="tabel">
                <div className="menu">
                    <h1 className="nama">Nama</h1>
                    <h2 className="status">Status</h2>
                    <h3 className="inisator">Inisator</h3>
                    <h4 className="dana">Dana yang diajukan</h4>
                </div>
                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program3.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Zakat Untuk Pendidikan Santri Pelosok</h1>
                            <h2 className="crud">
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="sukses">
                            <img src="../../assets/dot-h.png" className="dot"></img>
                            Disetujui
                        </button>
                    </div>

                    <div className="batu">PCNU Batu</div>

                    <div className="uang">Rp. 100.000.000</div>

                </div>

                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program2.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Hadirkan Kebahagiaan Melalui Sedekah Pangan</h1>
                            <h2>
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="pengajuan">
                            <img src="../../assets/dot-o.png" className="dot"></img>
                            Pengajuan
                        </button>
                    </div>

                    <div className="batu">Indah Wahyuni</div>

                    <div className="uang">Rp. 10.000.000</div>

                </div>

                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program1.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Pahala ABADI</h1>
                            <h2>
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="ditolak">
                            <img src="../../assets/dot-m.png" className="dot"></img>
                            Ditolak
                        </button>
                    </div>

                    <div className="batu">Andi Aziz</div>

                    <div className="uang">Rp. 50.000.000</div>

                </div>

                <div className="page">
                    <h1 className="one">
                        Page 1 of 1
                    </h1>
                    <h2 className="two">
                        <button className="prev">Previous</button>
                        <button className="next">Next</button>
                    </h2>
                </div>
            </div> */}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
