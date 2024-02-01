import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";
import "../css/addberita.css";

export default function AddBerita() {
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
          className={`col p-0  ${
            toggle ? "offset-md-2 col-md-10" : "col-md-12"
          }`}
          style={{ backgroundColor: "#EDF6F0" }}
        >
          <Nav Toggle={Toggle} />
          <div className="px-4 py-md-4">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <Button href="/berita" variant="outline-success-none fs-6 fw-semibold text-black" className="d-flex">
                  <img src="../assets/berita/arrow-left.svg" />
                  <h2 className="fs-6 fw-semibold pt-1 ms-2">Kembali</h2>
                </Button>
                <div className="d-flex">
                  <Button variant="outline-secondary fs-6 fw-semibold text-black">
                    Simpan sebagai draft
                  </Button>{" "}
                  <Button
                    variant="outline-success fs-6 ms-3 fw-semibold text-white"
                    style={{ backgroundColor: "#078D41" }}
                  >
                    Publish sekarang
                  </Button>{" "}
                </div>
              </div>
            </div>
            <div className="container bg-white rounded-4 p-4">
              <p className="fw-semibold text-black pb-2">Buat Berita</p>
              <div class="input-group mb-3">
                {/* <span class="input-group-text" id="inputGroup-sizing-default">Default</span> */}
                <input
                  type="text"
                  placeholder="Berikan ini judul"
                  className="custom-input fw-semibold"
                />
              </div>
              <div className="mb-4">
                <img
                  className="img-fluid"
                  src="../assets/berita/drag&drop.svg"
                />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="col-6 pe-4">
                  <p className="fw-medium mb-2">Tanggal</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="06 October 2023"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-6 ps-4">
                <p className="fw-medium mb-2">Jurnalis</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Nama jurnalis"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Isi Berita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
