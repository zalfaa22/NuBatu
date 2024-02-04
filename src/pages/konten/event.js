import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../css/berita.css";

export default function Event() {
  const [showModal, setShowModal] = useState(false);
  const [switchState1, setSwitchState1] = useState(localStorage.getItem("switchState1") === "true");
  const [switchState2, setSwitchState2] = useState(localStorage.getItem("switchState2") === "true");
  const [switchState3, setSwitchState3] = useState(localStorage.getItem("switchState3") === "true");
  const [selectedType, setSelectedType] = useState('');

  const toggleSwitch1 = () => {
    setSwitchState1((prev) => !prev);
    localStorage.setItem("switchState1", (!switchState1).toString());
  };

  const toggleSwitch2 = () => {
    setSwitchState2((prev) => !prev);
    localStorage.setItem("switchState2", (!switchState2).toString());
  };

  const toggleSwitch3 = () => {
    setSwitchState3((prev) => !prev);
    localStorage.setItem("switchState3", (!switchState3).toString());
  };

  const handleEditClick = () => {
    setShowModal(true); // Tampilkan modal saat tombol "Edit" diklik
  };

  const handleCloseModal = () => {
    setShowModal(false); // Sembunyikan modal saat ditutup
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    // Cleanup localStorage when the component is unmounted
    return () => {
      localStorage.removeItem("switchState1");
      localStorage.removeItem("switchState2");
      localStorage.removeItem("switchState3");
    };
  }, []);

  return (
    <>
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
              <div className="d-flex align-items-center pe-5 me-2">
                  <div
                    className={`switch-button ${switchState1 ? "off" : "on"}`}
                    onClick={toggleSwitch1}>
                    <div className={`slider ${switchState1 ? "off" : "on"}`} />
                  </div>
                </div>
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
                <div className="d-flex align-items-center pe-5 me-2">
                  <div
                    className={`switch-button ${switchState2 ? "off" : "on"}`}
                    onClick={toggleSwitch2}>
                    <div className={`slider ${switchState2 ? "off" : "on"}`} />
                  </div>
                </div>
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
              <div className="d-flex align-items-center pe-5 me-2">
                  <div
                    className={`switch-button ${switchState3 ? "off" : "on"}`}
                    onClick={toggleSwitch3}>
                    <div className={`slider ${switchState3 ? "off" : "on"}`} />
                  </div>
                </div>
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
          <p className="fw-regular mb-1 text2-set fw-medium" style={{ color: "#404040" }}>
        Pilih tipe penyematan
      </p>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select rounded "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="">Pilih...</option>
          <option value="tipe1">Tipe 1</option>
          <option value="tipe2">Tipe 2</option>
          {/* Tambahkan opsi lainnya sesuai kebutuhan */}
        </select>
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
      </>
  );
}
