import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import '../css/nderektanglet.css'
import Button from "react-bootstrap/Button";

export default function NderekTanglet() {
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
                        className="sidebar col-md-2 vh-100 position-fixed" style={{ backgroundColor: "#060313" }}>
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
                    <div className="luar">
                        <div className="koin">
                            <div className="program">
                                Nderek Tanglet
                            </div>
                            <div className="kanan">
                                <a href="/addCampaign" className="pencet">
                                    Tambah Program
                                    <img src='../../assets/add.png' alt='add' className="add" />
                                </a>

                                <img src="../../assets/profil.png" className="profil"></img>
                            </div>
                        </div>

                        <div className="option">
                            <div className="campaign">
                                <button className="satu">Kotak Masuk</button>
                                <h1>Tunda</h1>
                                <h1>Dibalas</h1>
                                <h1>Arsip</h1>
                            </div>
                            <button className="search">
                                Pencarian
                                <img src="../../assets/search.svg" className="cari"></img>
                            </button>
                        </div>
                    </div>

                    <div className="px-3 px-md-4 py-md-4" style={{ marginTop: "-50px" }}>
                        <div className="">

                            <div class="table-container-berita">
                                <table class="table custom-table">
                                    <thead>
                                        <tr className="title" style={{ width: "100%" }}>
                                            <th scope="col" style={{ padding: "1rem", width: "1000%" }} className="d-flex grid gap-2">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                        style={{ border: "1px solid #404040", width: "16px", height: "16px" }}
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    </label>
                                                </div>
                                                <img src="../../assets/arrow-down.svg">
                                                </img>
                                                <img src="../../assets/rotate.svg">
                                                </img>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "auto", padding: "15px" }}>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                        style={{ border: "1px solid #404040", width: "16px", height: "16px" }}
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ width: "100px", height: "auto" }}>
                                                <img src="../../assets/oren.svg"></img>
                                            </td>
                                            <td className="text-1 fw-normal py-3" style={{ height: "auto", width: "auto" }}>
                                                <a href="/detailChat" style={{textDecoration: "none"}}>
                                                    <p style={{ fontSize: "14px", color: "#252C32", fontWeight: "bold", textDecoration: "none" }}>Ziyad Ahmad Baharuddin</p>
                                                </a>

                                                <p style={{ fontSize: "12px", color: "#5E7080", marginTop: "-15px" }}>ziyadbaharuddin@gmail.com</p></td>
                                            <td className="text-1 fw-slug text-start py-3" style={{ width: "auto", fontWeight: "bold", color: "#252C32", height: "auto" }}>Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...</td>
                                            <td style={{ color: "#252C32", height: "auto" }}>Sep 26, 2023</td>
                                        </tr>

                                        <tr>
                                            <td style={{ width: "auto", padding: "15px" }}>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                        style={{ border: "1px solid #404040", width: "16px", height: "16px" }}
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ width: "auto" }}>
                                                <img src="../../assets/biru.svg"></img>
                                            </td>
                                            <td className="text-1 fw-normal py-3" style={{ height: "56px", width: "auto" }}>
                                                <p style={{ fontSize: "14px", color: "#252C32" }}>Ziyad Ahmad Baharuddin</p>
                                                <p style={{ fontSize: "12px", color: "#5E7080", marginTop: "-15px" }}>ziyadbaharuddin@gmail.com</p></td>
                                            <td className="text-1 fw-slug text-start py-3" style={{ width: "auto", color: "#252C32" }}>Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...</td>
                                            <td style={{ color: "#252C32" }}>Sep 13, 2023</td>
                                        </tr>

                                        <tr>
                                            <td style={{ width: "auto", padding: "15px" }}>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                        style={{ border: "1px solid #404040", width: "16px", height: "16px" }}
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ width: "auto" }}>
                                                <img src="../../assets/ijo.svg"></img>
                                            </td>
                                            <td className="text-1 fw-normal py-3" style={{ height: "56px", width: "auto" }}>
                                                <p style={{ fontSize: "14px", color: "#252C32" }}>Ziyad Ahmad Baharuddin</p>
                                                <p style={{ fontSize: "12px", color: "#5E7080", marginTop: "-15px" }}>ziyadbaharuddin@gmail.com</p></td>
                                            <td className="text-1 fw-slug text-start py-3" style={{ width: "auto", color: "#252C32" }}>Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...</td>
                                            <td style={{ color: "#252C32" }}>Agu 04, 2023</td>
                                        </tr>

                                        <tr>
                                            <td style={{ width: "auto", padding: "15px" }}>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                        style={{ border: "1px solid #404040", width: "16px", height: "16px" }}
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ width: "auto" }}>
                                                <img src="../../assets/ungu.svg"></img>
                                            </td>
                                            <td className="text-1 fw-normal py-3" style={{ height: "56px", width: "auto" }}>
                                                <p style={{ fontSize: "14px", color: "#252C32" }}>Ziyad Ahmad Baharuddin</p>
                                                <p style={{ fontSize: "12px", color: "#5E7080", marginTop: "-15px" }}>ziyadbaharuddin@gmail.com</p></td>
                                            <td className="text-1 fw-slug text-start py-3" style={{ width: "auto", color: "#252C32" }}>Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...</td>
                                            <td style={{ color: "#252C32" }}>Jul 21, 2023</td>
                                        </tr>

                                        {/* page */}
                                        <tr>
                                            <th colspan="3" className="text-1 fw-normal ps-3 pt-3" >Page 1 of 1</th>
                                            <td className="text-end p-3 d-flex pe-3 justify-content-end" style={{ marginRight: "-112px" }}>
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
    )
}