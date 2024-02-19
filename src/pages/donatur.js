import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/donatur.css";

export default function Donatur() {
  const [showPopup, setShowPopup] = useState(false); // State untuk menentukan kapan pop-up ditampilkan
  const [selectedDonatur, setSelectedDonatur] = useState(null); // State untuk menyimpan data donatur yang dipilih
  const [statusDonatur, setStatusDonatur] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  // Data donatur untuk contoh
  const daftarDonatur = [
    { transaksi: "01 Okt 2023 08:43:04 WIB", donatur: "Ahmad Alamsyah Rauf", rekening: "0495285835", uang: "Rp750.000", bank: "../../assets/bni.svg" },
    { transaksi: "29 Nov 2023 15:23:20 WIB", donatur: "M. Fajrul Falah", rekening: "0011555510", uang: "Rp500.000", bank: "../../assets/bca.svg" },
    { transaksi: "29 Nov 2023 11:56:35 WIB", donatur: "Lintang Ayu Permata", rekening: "7134559788", uang: "Rp300.000", bank: "../../assets/bsi.svg" },
    // Tambahkan donatur lainnya di sini
  ];

  // Fungsi untuk menampilkan pop-up dan menyimpan data donatur yang dipilih
  const handleDonaturClick = (donaturData) => {
    setSelectedDonatur(donaturData);
    setShowPopup(true);
  };

  const handleStatusDonaturClick = (status) => {
    setStatusDonatur(status);
  };

  const handleSearchClick = () => {
    setSearchMode(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log('Search Query:', searchQuery);
  };

  const filteredDonatur = daftarDonatur.filter((donatur) => {
    // Filter based on search query
    return (
      (donatur.donatur && donatur.donatur.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (donatur.transaksi && donatur.transaksi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (donatur.rekening && donatur.rekening.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (donatur.uang && donatur.uang.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (donatur.bank && donatur.bank.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

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
                <tr className="mb-0" style={{ width: "100%" }}>
                <th colSpan="7" style={{textAlign: "end", height: "76px", verticalAlign: "middle"}}>



                    {!searchMode ? (
                     <Button
                     variant="outline-success-none fw-semibold text-black"
                     className="search-berita"
                     onClick={handleSearchClick}
                     style={{alignItems: "end", display: "flex", justifyContent: "end"}}
                 >
                     <img
                         className="ms-2 search-icon-berita"
                         src="../assets/filter.png"
                         alt="Search"
                     />
                     Filter
                 </Button>
                 
                    ) : (
                      <form onSubmit={handleSearchSubmit}>
                        <input
                          type="text"
                          className="form-control search-input"
                          placeholder="Cari donatur..."
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                        {/* <button type="submit" className="btn btn-primary mt-2">Cari</button> */}
                      </form>
                    )}
                  </th>
                </tr>
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
                {filteredDonatur.map((donatur, index) => (
                  <tr
                    key={index}
                    style={{ fontSize: "14px", color: "#404040" }}
                  >
                    <td style={{ padding: "1rem", color: "#404040" }}>{index + 1}</td>
                    <td style={{ padding: "1rem", color: "#404040" }}>{donatur.transaksi}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.donatur}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>
                      <img src={donatur.bank} alt="Bank" />
                    </td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.rekening}</td>
                    <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>{donatur.uang}</td>
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
                <p className="tgl">{selectedDonatur.transaksi}</p>
                <p className="donasi">{selectedDonatur.uang}</p>
                <p className="garis"></p>
                <div className="nama-donatur">
                  <p className="judul-kiri">Donatur</p>
                  <p className="judul-kanan">{selectedDonatur.donatur}</p>
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
            <Button className="akhir" style={{backgroundColor: "transparent", color: "black", borderColor: "#808080"}} onClick={() => setShowPopup(false)}>
              <img className="arrow-back" src="../../assets/arrow.svg" style={{width: "16px"}}></img>
              Kembali
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
