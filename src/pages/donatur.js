import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/donatur.css";


export default function Donatur() {

  const [showPopup, setShowPopup] = useState(false); // State untuk menentukan kapan pop-up ditampilkan
  const [selectedDonatur, setSelectedDonatur] = useState(null); // State untuk menyimpan data donatur yang dipilih

  // Data donatur untuk contoh
  const donaturData = [
    { id: 1, tanggalTransaksi: "01 Okt 2023 08:43:04 WIB", nama: "Ahmad Alamsyah Rauf", rekening: "0495285835", donasi: "Rp750.000", bank: <img src="../../assets/bni.svg"></img>, namaBank: "BNI (Bank Negara Indonesia)" },

    { id: 2, tanggalTransaksi: "29 Nov 2023 15:23:20 WIB", nama: "M. Fajrul Falah", rekening: "0011555510", donasi: "Rp500.000", bank: <img src="../../assets/bca.svg"></img>, namaBank: "BCA (Bank Central Asia)" },

    { id: 3, tanggalTransaksi: "29 Nov 2023 11:56:35 WIB", nama: "Lintang Ayu Permata", rekening: "7134559788", donasi: "Rp300.000", bank: <img src="../../assets/bsi.svg"></img> , namaBank: "BSI (Bank Syariah Indonesia)"}
  ];

  // Fungsi untuk menampilkan pop-up dan menyimpan data donatur yang dipilih
  const handleDonaturClick = (donaturData) => {
    setSelectedDonatur(donaturData);
    setShowPopup(true);
  };

  return (
    <div className="content">
      <div className="px-3 px-md-4 py-md-4">
        <div className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="fs-2 fw-bold">Donatur</h2>
            <img src="../assets/berita/profile.svg" alt="Profile" />
          </div>
        </div>
        <div style={{ marginTop: "-20px" }}>
          <div className="table-container-berita">
            <table className="table custom-table" style={{ width: "100%" }}>
              <thead>
                <div className="mb-0" style={{ width: "100%" }}>
                  <div
                    className="d-flex justify-content-end"
                    style={{ width: "900%" }}
                  >
                    <Button
                      variant="outline-success fs-6 fw-semibold text-black"
                      className="berita-btn"
                      style={{ paddingLeft: "0px", marginBottom: "50px" }}
                    >
                      <img
                        className="ms-2"
                        src="../assets/filter.png"
                        alt="Search"
                        style={{ paddingLeft: "0px" }}
                      />
                      Filter
                    </Button>
                  </div>
                </div>
                <tr className="title">
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    Tanggal transaksi
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    Donatur
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    Bank
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    No. Rekening
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    Nominal Donasi
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "1rem",
                      textAlign: "end",
                      fontWeight: "normal",
                      color: "#404040",
                    }}
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Data donatur */}
                {donaturData.map((donatur) => (
                  <tr
                    key={donatur.id}
                    style={{ fontSize: "14px", color: "#404040" }}
                  >
                    <td style={{ padding: "1rem", color: "#404040" }}>{donatur.id}</td>
                    <td style={{ padding: "1rem", color: "#404040" }}>{donatur.tanggalTransaksi}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.nama}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.bank}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.rekening}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.donasi}</td>
                    <td className="eye" style={{ padding: "1rem", textAlign: "end" }}>
                      <p>Lihat</p>
                      <img
                        src="../../assets/eye.svg"
                        alt="Lihat"
                        onClick={() => handleDonaturClick(donatur)}
                      />
                    </td>
                  </tr>
                ))}
                {/* Pagination */}
                <tr>
                  <td colSpan="7">
                    <div className="d-flex justify-content-between">
                      <span className="text-1 fw-normal ps-3 pt-3">
                        Page 1 of 1
                      </span>
                      <div className="text-end p-3 d-flex pe-3 justify-content-end">
                        <Button variant="outline-secondary fw-medium" size="sm">
                          Previous
                        </Button>{" "}
                        <Button
                          variant="outline-secondary ms-2 fw-medium"
                          size="sm"
                        >
                          Next
                        </Button>{" "}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
      {/* Pop-up */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            {/* Tampilkan data donatur yang dipilih */}
            <h1 className="judul-transaksi">Detail Transaksi</h1>
            <div className="bungkus-transaksi">
              <p className="hijau rounded-top"></p>
              <div className="content-popup">
                <p className="tgl-trans">Tanggal Transaksi</p>
                <p className="tgl">{selectedDonatur.tanggalTransaksi}</p>
                <p className="donasi">{selectedDonatur.donasi}</p>
                <p className="garis"></p>
                <div className="nama-donatur">
                  <p className="judul-kiri">Donatur</p>
                  <p className="judul-kanan">{selectedDonatur.nama}</p>
                </div>
                <div className="nama-donatur">
                  <p className="judul-kiri">Transfer melalui</p>
                  <p className="judul-kanan">{selectedDonatur.namaBank}</p>
                </div>
                <div className="nama-donatur">
                  <p className="judul-kiri">Nomor Rekening</p>
                  <p className="judul-kanan">{selectedDonatur.rekening}</p>
                </div>
                <div className="nama-donatur">
                  <p className="judul-kiri">Penerima</p>
                  <p className="judul-kanan">LAZIZMU BATU</p>
                </div>
                <div className="nama-donatur">
                  <p className="judul-kiri">Bank Penerima</p>
                  <p className="judul-kanan">BSI (BANK SYARIAH INDONESIA)</p>
                </div>
              </div>

            </div>

            {/* Tampilkan data lainnya */}
            <Button className="akhir" style={{backgroundColor: "transparent", color: "black", borderColor: "#808080", fontSize: "14px"}} onClick={() => setShowPopup(false)}>
              <img src="../../assets/arrow.svg" style={{width: "16px"}}></img>
              Kembali
              </Button>
          </div>
        </div>
      )}
    </div>
  );
}
