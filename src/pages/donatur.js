import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";
import "../css/donatur.css";

export default function Donatur() {
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
                    className={`col p-0 vh-auto ${toggle ? "offset-md-2 col-md-10" : "col-md-12"
                        }`}
                    style={{ backgroundColor: "#EDF6F0" }}
                >
                    <Nav Toggle={Toggle} />
                    <div className="px-3 px-md-4 py-md-4">
                        <div className="mb-5">
                            <div className="d-flex justify-content-between">
                                <h2 className="fs-2 fw-bold">Donatur</h2>
                                <img src="../assets/berita/profile.svg" />

                            </div>
                        </div>
                        <div style={{marginTop: "-20px"}}>

                            <div class="table-container-berita">
                                <table class="table custom-table" style={{ width: "100%" }}>
                                    <thead>
                                        <div className="mb-0" style={{ width: "100%"}}>
                                            <div className="d-flex justify-content-end" style={{width: "396%"}}>
                                                <Button variant="outline-success fs-6 fw-semibold text-black" className="berita-btn" style={{ paddingLeft: "0px", marginBottom: "50px" }}>
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
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>No</th>
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>Tanggal transaksi</th>
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>Donatur</th>
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>Bank</th>
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>No. Rekening</th>
                                            <th scope="col" style={{ padding: "1rem", fontWeight: "normal", color: "#404040" }}>Nominal Donasi</th>
                                            <th scope="col" style={{ padding: "1rem", textAlign: "end", fontWeight: "normal", color: "#404040" }}>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* satu */}
                                        <tr style={{ fontSize: "14px", color: "#404040" }}>
                                            <td style={{ padding: "1rem", color: "#404040" }}>1</td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>01 Okt 2023 08:43:04 WIB</td>
                                            <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>Ahmad Alamsyah Rauf</td>
                                            <td style={{ padding: "1rem" }}>
                                                <div>
                                                    <img src="../../assets/bni.svg"></img>
                                                </div>
                                            </td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>0495285835</td>
                                            <td className="text-1 fw-bold" style={{ padding: "1rem", color: "#404040" }}>Rp750.000</td>
                                            <td className="eye" style={{ padding: "1rem" }}>
                                                <p>Lihat</p>
                                                <a href="/lihat">
                                                  <img src="../../assets/eye.svg"></img>  
                                                </a>
                                                
                                            </td>
                                        </tr>
                                        {/* dua */}
                                        <tr style={{ fontSize: "14px", color: "#404040" }}>
                                            <td style={{ padding: "1rem", color: "#404040" }}>2</td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>29 Nov 2023 15:23:20 WIB</td>
                                            <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>M. Fajrul Falah</td>
                                            <td style={{ padding: "1rem" }}>
                                                <div className="">
                                                    <img src="../../assets/bca.svg"></img>
                                                </div>
                                            </td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>0011555510</td>
                                            <td className="text-1 fw-bold" style={{ padding: "1rem", color: "#404040" }}>Rp500.000</td>
                                            <td className="eye" style={{ padding: "1rem" }}>
                                                <p>Lihat</p>
                                                <a href="/lihat">
                                                  <img src="../../assets/eye.svg"></img>  
                                                </a>
                                            </td>
                                        </tr>
                                        {/* tiga */}
                                        <tr style={{ fontSize: "14px", color: "#404040" }}>
                                            <td style={{ padding: "1rem", color: "#404040" }}>3</td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>29 Nov 2023 11:56:35 WIB</td>
                                            <td style={{ padding: "1rem", fontWeight: "bold", color: "#404040" }}>Lintang Ayu Permata</td>
                                            <td style={{ padding: "1rem" }}>
                                                <div className="">
                                                    <img src="../../assets/bsi.svg"></img>
                                                </div>
                                            </td>
                                            <td style={{ padding: "1rem", color: "#404040" }}>7134559788</td>
                                            <td className="text-1 fw-bold" style={{ padding: "1rem", color: "#404040" }}>Rp300.000</td>
                                            <td className="eye" style={{ padding: "1rem" }}>
                                                <p>Lihat</p>
                                                <a href="/lihat">
                                                  <img src="../../assets/eye.svg"></img>  
                                                </a>
                                            </td>
                                        </tr>
                                        {/* page */}
                                        <tr className="d-flex justify-content-between" style={{ width: "400%" }}>
                                            <th colspan="3" className="text-1 fw-normal ps-3 pt-3" style={{ width: "100%" }}>Page 1 of 1</th>
                                            <td className="text-end p-3 d-flex pe-3 justify-content-end">
                                                <Button variant="outline-secondary fw-medium" size="sm">Previous</Button>{' '}
                                                <Button variant="outline-secondary ms-2 fw-medium" size="sm">Next</Button>{' '}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
