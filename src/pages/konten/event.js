import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../css/berita.css";

export default function Event() {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true); // Tampilkan modal saat tombol "Edit" diklik
  };

  const handleCloseModal = () => {
    setShowModal(false); // Sembunyikan modal saat ditutup
  };

  return (
    <div className="">
      <div>
        <Sidebar />
      </div>
      <div className="content vh-100" style={{ backgroundColor: "#EDF6F0" }}>
        <div className="px-3 px-md-5 py-4">
          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Event</h2>
              <div className="d-flex">
                <img src="../assets/berita/profile.svg" />
              </div>
            </div>
          </div>
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
                  <button className="edit-btn" onClick={handleEditClick}>
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

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="event-modal"
      >
        <div className="p-4 m-2">
          <p className="event-modal1 fw-semibold lh-sm mb-0">
            Tambah dan sematkan ke halaman Anda
          </p>
          <p
            className="event-modal2 mt-1 fw-medium mb-4"
            style={{ color: "black" }}
          >
            Sematkan video youtube, instagram post, dan lainnya.
          </p>
          <p
            className="fw-regular mb-1 text2-set fw-medium"
            style={{ color: "#404040" }}
          >
            Pilih tipe penyematan
          </p>
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control rounded"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <p
            className="fw-regular mb-1 text2-set fw-medium"
            style={{ color: "#404040" }}
          >
            URL
          </p>
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control rounded"
              placeholder="http://www."
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="d-flex justify-content-between mt-5">
            <Button
              variant="outline-secondary"
              className="btn-modal1 fw-semibold me-0"
              onClick={handleCloseModal}
            >
              <img
                className="mb-1 me-0 me-md-2 fw-semibold"
                src="../assets/berita/arrow-left-small.svg"
              />
              Kembali
            </Button>
            <Button
              variant="success"
              className="btn-modal2 "
              onClick={handleCloseModal}
            >
              Simpan Perubahan
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
