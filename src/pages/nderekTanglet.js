import React, { useState } from "react";
import "../css/nderektanglet.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function NderekTanglet() {

  const [statusTanglet, setStatusTanglet] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [showhide, setShowhide] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleToggle = () => {
    setShowhide(prevState => !prevState);
  };

  const handleToggleRow = (index) => {
    const updatedTanglet = [...daftarTanglet];
    updatedTanglet[index].showhide = !updatedTanglet[index].showhide;
    setDaftarTanglet(updatedTanglet);
  };

  const handleCheckboxChange = (index) => {
    handleToggleRow(index);

    setSelectedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));

    const isAllSelected = daftarTanglet.every((tanglet, idx) => tanglet.showhide || selectedItems[idx]);
    setSelectAllChecked(isAllSelected);
  };

  const handleStatusTangletClick = (status) => {
    setStatusTanglet(status);
  };

  const handleSearchClick = () => {
    setSearchMode(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  const [daftarTanglet, setDaftarTanglet] = useState([
    { partisipan: "Ziyad Ahmad Baharuddin", pertanyaan: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", tanggal: "Sep 13, 2023", gambar: "../../assets/biru.svg", email: "ziyadbaharuddin@gmail.com", showhide: false },
    { partisipan: "Ziyad Ahmad Baharuddin", pertanyaan: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", tanggal: "Agu 04, 2023", gambar: "../../assets/ijo.svg", email: "ziyadbaharuddin@gmail.com", status: 'tunda', showhide: false },
    { partisipan: "Ziyad Ahmad Baharuddin", pertanyaan: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", tanggal: "Sep 26, 2023", gambar: "../../assets/oren.svg", email: "ziyadbaharuddin@gmail.com", status: 'dibales', showhide: false },
    { partisipan: "Ziyad Ahmad Baharuddin", pertanyaan: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", tanggal: "Jul 21, 2023", gambar: "../../assets/ungu.svg", email: "ziyadbaharuddin@gmail.com", status: 'arsip', showhide: false }
  ]);

  const filteredTanglet = daftarTanglet.filter((tanglet) => {
    if (statusTanglet === 'semua') {
      return true;
    } else if (statusTanglet === 'tunda') {
      return tanglet.status === 'tunda';
    } else if (statusTanglet === 'dibales') {
      return tanglet.status === 'dibales';
    } else if (statusTanglet === 'arsip') {
      return tanglet.status === 'arsip';
    }
  })

    .filter((tanglet) => {
      return (tanglet.partisipan && tanglet.partisipan.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (tanglet.pertanyaan && tanglet.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (tanglet.tanggal && tanglet.tanggal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (tanglet.email && tanglet.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (tanglet.status && tanglet.status.toLowerCase().includes(searchQuery.toLowerCase()));
    });

  const handleSelectAllToggle = () => {
    setSelectAllChecked(prevState => !prevState);

    const updatedTanglet = daftarTanglet.map((tanglet, index) => {
      return { ...tanglet, showhide: !selectAllChecked || !selectedItems[index] };
    });
    setDaftarTanglet(updatedTanglet);

    const updatedSelectedItems = {};
    for (let i = 0; i < updatedTanglet.length; i++) {
      updatedSelectedItems[i] = !selectAllChecked;
    }
    setSelectedItems(updatedSelectedItems);
  };

  const anyCheckboxSelected = Object.values(selectedItems).some(value => value);

  const renderActions = () => {
    if (anyCheckboxSelected) {
      return (
        <label className="form-label d-flex gap-2" style={{ marginLeft: "4px" }}>
          <img src="../../assets/delete.svg" alt="delete icon" />
          <img src='../../assets/archive.svg' alt="archive icon" />
          <img src='../../assets/flag.svg' alt="flag icon" />
        </label>
      );
    } else {
      return (
        <label className="form-label d-flex gap-2" style={{ marginLeft: "4px", visibility: anyCheckboxSelected ? "visible" : "hidden" }}>
          <img src='../../assets/flag.svg' alt="flag icon" />
        </label>
      );
    }
  };

  const renderRotateIcon = () => {
    return (
      !anyCheckboxSelected && (
        <img
          src="../../assets/rotate.svg"
          alt="rotate icon"
          onClick={handleToggle}
        />
      )
    );
  };
  

  return (
    <div className="content">
      <div className="luar">
        <div className="koin">
          <div className="program">Nderek Tanglet</div>
          <div className="kanan">
            <img src="../../assets/profil.png" className="profil"></img>
          </div>
        </div>

        <div className="option">
          <div className="campaign">
            <Button variant={`outline-success-none fw-semibold text-black ${statusTanglet === 'semua' && 'active'}`} className="satu"
              onClick={() => handleStatusTangletClick('semua')}
            >Kotak Masuk</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusTanglet === 'tunda' && 'active'}`}
              onClick={() => handleStatusTangletClick('tunda')}
            >Tunda</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusTanglet === 'dibales' && 'active'}`}
              onClick={() => handleStatusTangletClick('dibales')}
            >Dibales</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusTanglet === 'arsip' && 'active'}`}
              onClick={() => handleStatusTangletClick('arsip')}
            >Arsip</Button>
          </div>
          <Dropdown className="dropdown-campaign">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-campaign">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleStatusTangletClick('semua')} className="dropdown-campaign">Kotak Masuk</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusTangletClick('tunda')} className="dropdown-campaign">Tunda</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusTangletClick('dibales')} className="dropdown-campaign">Dibales</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusTangletClick('arsip')} className="dropdown-campaign">Arsip</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div >
            {!searchMode ? (
              <Button
                variant="outline-success-none fw-semibold text-black"
                className="search-berita"
                onClick={handleSearchClick}
              >
                Pencarian
                <img
                  className="ms-2 search-icon-berita"
                  src="../assets/search-normal.svg"
                  alt="Search"
                />
              </Button>
            ) : (
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Cari pertanyaan..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="px-3 px-md-4 py-md-4" style={{ marginTop: "-50px" }}>
        <div className="">
          <div class="table-container-berita">
            <table class="table custom-table">
              <thead>
                <tr className="title">
                  <th colspan="5" style={{ padding: "1rem" }}>
                    <div className="row">
                      <div className="col-12 ms-3">
                        <form className="row" style={{ backgroundColor: "white" }}>
                          <div className="col-auto">
                            <div className="text-white d-flex gap-1 align-items-start">
                              <input
                                type="checkbox"
                                name="selectAll"
                                checked={selectAllChecked}
                                onChange={handleSelectAllToggle}
                                style={{ border: "1px solid black", width: "16px", height: "16px", marginLeft: "-14px" }}
                              />
                              <img src="../../assets/arrow-down.svg"></img>
                              {renderRotateIcon()}
                              {renderActions()}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTanglet.map((daftarTanglet, index) => (
                  <tr key={index}>
                    <td style={{ width: "auto", padding: "15px" }}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={daftarTanglet.showhide}
                          onChange={() => handleCheckboxChange(index)}
                          style={{
                            border: "1px solid #404040",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                      </div>
                    </td>
                    <td style={{ width: "100px", height: "auto" }}>
                      <img src={daftarTanglet.gambar}></img>
                    </td>
                    <td
                      className="text-1 fw-normal py-3"
                      style={{ height: "auto", width: "auto" }}
                    >
                      <a href="/detailChat" style={{ textDecoration: "none" }}>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#252C32",
                            fontWeight: index === 0 ? "600" : "normal",
                            textDecoration: "none",
                          }}
                        >
                          {daftarTanglet.partisipan}
                        </p>
                      </a>

                      <p
                        style={{
                          fontSize: "12px",
                          color: "#5E7080",
                          marginTop: "-15px",
                        }}
                      >
                        {daftarTanglet.email}
                      </p>
                    </td>
                    <td
                      className="text-1 fw-slug text-start py-3"
                      style={{
                        fontSize: "14px",
                        color: "#252C32",
                        fontWeight: index === 0 ? "600" : "normal",
                        textDecoration: "none",
                      }}
                    >
                      {daftarTanglet.pertanyaan}
                    </td>
                    <td style={{
                      color: "#252C32",
                      height: "auto",
                      fontWeight: index === 0 ? "600" : "normal",
                      textDecoration: "none",
                      textAlign: "end"
                    }}>
                      {daftarTanglet.tanggal}
                    </td>
                  </tr>
                ))}

                <tr>
                  <th colspan="4" className="text-1 fw-normal ps-3 pt-3">
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

export default NderekTanglet;
