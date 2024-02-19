import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { getListOfEmployees } from '../services/localstorage';
import { CampaignItem, CampaignItem as Item } from './campaignItem'; // Rename EmployeeItem to Item

export default function Campaign() {
  const [statusCampaign, setStatusCampaign] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      setEmployees(getListOfEmployees());
  }, []);

  const handleStatusCampaignClick = (status) => {
    setStatusCampaign(status);
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

  // Dummy data campaign
  const daftarCampaign = [
    { nama: "Zakat Untuk Pendidikan Santri Pelosok", status: "disetujui", inisiator: "PCNU Batu", dana: "Rp100.000.000", gambar: "../../assets/program3.svg" },
    { nama: "Hadirkan kebahagiaan melalui sedekah pangan", status: "pengajuan", inisiator: "Indah Wahyuni", dana: "Rp10.000.000", gambar: "../../assets/program2.svg" },
    { nama: "Pahala ABADI", status: "ditolak", inisiator: "Andi Aziz", dana: "Rp50.000.000", gambar: "../../assets/program1.svg" },
    // Tambahkan campaign lainnya di sini
  ];

  const filteredCampaign = daftarCampaign.filter((campaign) => {
    if (statusCampaign === 'semua') {
      return true; // Tampilkan semua campign
    } else if (statusCampaign === 'disetujui') {
      return campaign.status === 'disetujui'; // Tampilkan hanya campaign yang berstatus disetujui
    } else if (statusCampaign === 'pengajuan') {
      return campaign.status === 'pengajuan'; // Tampilkan hanya campaign yang berstatus pengajuan
    } else if (statusCampaign === 'ditolak') {
      return campaign.status === 'ditolak'; // Tampilkan hanya campaign yang berstatus ditolak
    }
  }).filter((campaign) => {
    // Filter based on search query
    return campaign.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.inisiator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.dana.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
            <Button variant={`outline-success-none fw-semibold text-black ${statusCampaign === 'semua' && 'active'}`} className="satu"
              onClick={() => handleStatusCampaignClick('semua')}
            >Campaign Program</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusCampaign === 'disetujui' && 'active'}`}
              onClick={() => handleStatusCampaignClick('disetujui')} 
            >Disetujui</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusCampaign === 'pengajuan' && 'active'}`}
              onClick={() => handleStatusCampaignClick('pengajuan')}
            >Pengajuan</Button>
            <Button
              variant={`outline-success-none fw-normal text-black ${statusCampaign === 'ditolak' && 'active'}`}
              onClick={() => handleStatusCampaignClick('ditolak')}
            >Ditolak</Button>
          </div>
          <Dropdown className="dropdown-campaign">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-campaign">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleStatusCampaignClick('semua')} className="dropdown-campaign">Campaign Program</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusCampaignClick('disetujui')} className="dropdown-campaign">Disetujui</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusCampaignClick('pengajuan')} className="dropdown-campaign">Pengajuan</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusCampaignClick('ditolak')} className="dropdown-campaign">Ditolak</Dropdown.Item>
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
                  placeholder="Cari campaign program..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            )}
          </div>
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
                  {employees.map(employee => (
                                    <Item // Use Item instead of EmployeeItem
                                        employee={employee} 
                                        setEmployees={setEmployees} 
                                        key={employee.id}
                                    />
                                ))}
                {filteredCampaign.map((daftarCampaign, index) => (
                  <tr key={index}>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                      <img src={daftarCampaign.gambar} className="pe-3"></img>
                      <div className="d-block ">
                        <span className="title fw-semibold pt-5">
                          {daftarCampaign.nama}
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
                        <img src={`../assets/${daftarCampaign.status}.svg`} className=""></img>
                        {/* Disetujui */}
                      </div>
                    </td>
                    <td className="text-1 fw-normal py-3">{daftarCampaign.inisiator}</td>
                    <td className="text-1 fw-slug text-end py-3">
                      {daftarCampaign.dana}
                    </td>
                  </tr>
                ))}

                {employees.map(employee => <CampaignItem employee={employee} key={employee.id} setEmployees={setEmployees} />)}

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
