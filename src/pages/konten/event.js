import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Nav from "../../components/nav";
import Button from "react-bootstrap/Button";
import "../../css/berita.css";

export default function Event() {
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
          <div className="px-3 px-md-5 py-md-4">
            <div className="mb-5">
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold page-title">Event</h2>
                <div className="d-flex">
                  {/* <Button
                    href="/addBerita"
                    variant="success"
                    size="lg"
                    className="mt-1 me-3"
                  >
                    Tambah Berita
                    <img
                      src="../../assets/berita/plus.svg"
                      alt="add"
                      className="ms-2"
                    />
                  </Button>{" "} */}
                  <img src="../assets/berita/profile.svg" />
                </div>
              </div>
            </div>
            {/* <div className="p-3 bg-white rounded-4">
               <div className="d-flex justify-content-between">
                <div className="d-flex"><img className="img-fluid" src="../../assets/berita/youtube.svg"/><p className="fw-bold">Youtube Video</p></div>
                <div className="d-flex"><img className="img-fluid" src="../../assets/berita/edit-icon.svg"/><p className="fw-regular">Edit</p></div>
               </div> 
            </div> */}
            <div className="p-3 bg-white rounded-4 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src="../../assets/berita/youtube.svg"
                    alt="Youtube Icon"
                    className="me-2 img-fluid"
                  />
                  <p className="fw-bold m-0">Youtube Video</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex align-items-center me-3">
                    <button className="edit-btn">
                      <img src="../assets/berita/edit-icon.svg" />
                      <span className="ms-1">Edit</span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="del-btn">
                      <img src="../assets/berita/trash-icon.svg" />
                      <span className="ms-1">Hapus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-4 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src="../../assets/berita/instagram.svg"
                    alt="Youtube Icon"
                    className="me-2 img-fluid"
                  />
                  <p className="fw-bold m-0">Instagram post</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex align-items-center me-3">
                    <button className="edit-btn">
                      <img src="../assets/berita/edit-icon.svg" />
                      <span className="ms-1">Edit</span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="del-btn">
                      <img src="../assets/berita/trash-icon.svg" />
                      <span className="ms-1">Hapus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-4 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src="../../assets/berita/instagram.svg"
                    alt="Youtube Icon"
                    className="me-2 img-fluid"
                  />
                  <p className="fw-bold m-0">Instagram post</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex align-items-center me-3">
                    <button className="edit-btn">
                      <img src="../assets/berita/edit-icon.svg" />
                      <span className="ms-1">Edit</span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="del-btn">
                      <img src="../assets/berita/trash-icon.svg" />
                      <span className="ms-1">Hapus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
