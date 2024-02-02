import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";
import "../css/setting.css";

export default function Pengaturan() {
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
          className={`col p-0 min-vh-100 ${
            toggle ? "offset-md-2 col-md-10" : "col-md-12"
          }`}
          style={{ backgroundColor: "#EDF6F0" }}
        >
          <Nav Toggle={Toggle} />
          <div className="px-3 px-md-5 py-md-4">
            <div className="mb-4 mb-md-5">
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold page-title">Setting</h2>
                <div className="d-flex">
                  <img src="../assets/berita/profile.svg" />
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-4 mb-3">
              <div className="d-md-flex col">
                <div className="col-md-4 col-lg-6">
                  <p className="fw-semibold setting-title">Detail Akun</p>
                </div>
                <div className="col-md-8 col-lg-6 pe-3">
                  <p className="fw-semibold text1-set">Foto Profil</p>
                  <div className="d-flex align-items-center">
                    <img src="../../assets/profile-set.svg" alt="Youtube Icon" className="me-3 img-fluid"/>
                    <p className="fw-regular m-0 text2-set">
                      Update your avatar by clicking the image beside. 288x288
                      px size recommended in PNG or JPG format only.
                    </p>
                  </div>
                  <p className="fw-semibold mt-4 text1-set">Detail</p>
                  <p className="fw-regular mb-0 text2-set">Nama</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <p className="fw-regular mb-0 text2-set">Email</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded mb-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="d-md-flex col pt-4">
                <div className="col-md-4 col-lg-6">
                  <p className="fw-semibold setting-title">Security</p>
                </div>
                <div className="col-md-8 col-lg-6 pe-3">
                  <p className="fw-semibold mb-4 text1-set">Reset Password</p>
                  <p className="fw-regular mb-0 text2-set">Password lama</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <p className="fw-regular mb-0 text2-set">Password baru</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
              </div><Button variant="success">Simpan Perubahan</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
