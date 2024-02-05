import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import '../css/addcampaign.css'
import DropzoneComponent from "../components/dropzone";

export default function AddCampaign() {
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
                    className={`col p-0 vh-100 ${toggle ? "offset-md-2 col-md-10" : "col-md-12"
                        }`}
                    style={{ backgroundColor: "#EDF6F0" }}
                >
                    <Nav Toggle={Toggle} />
                    <div className="bungkus-donatur">
                        <div className="detail">
                            <div className="donatur">
                                <a href="/campaign" className="kiri">
                                    <img src="../../assets/arrow.svg" alt="arrow" className="arrow" />
                                    <h1 className="kembali">
                                        Kembali
                                    </h1>
                                </a>

                                <div className="button-atas-kanan">
                                    <button className="simpan">Simpan Pengajuan</button>
                                    <button className="verif">Verifikasi Program</button>
                                </div>
                            </div>
                            <div className="umum">
                                <button className="info">Informasi Umum</button>
                                <a href="/fotoDetail" style={{ textDecoration: 'none' }}>
                                    <p>Foto Detail</p>
                                </a>

                            </div>

                            <div className="putih">
                                <div className="form">
                                    <div className="judul">
                                        Detail Program
                                    </div>
                                    <form className="nam-prog">
                                        <div class="mb-3">
                                            <coverlabel for="exampleInputEmail1" class="form-label">Nama Program</coverlabel>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Nama Program"
                                            style={{fontSize: "16px", marginTop: "5px"}} />
                                        </div>
                                        <div class="mb-3">
                                            <coverlabel for="exampleInputPassword1" class="form-label">
                                                Deskripsi
                                            </coverlabel>
                                            <textarea
                                                class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="E.g. Deskripsi Detail"
                                                style={{fontSize: "16px", marginTop: "5px"}}>
                                            </textarea>
                                        </div>

                                        <hr className="my-2" />

                                        <div class="mb-3">
                                            <coverlabel for="exampleInputEmail1" class="form-label">
                                                Dana yang diajukan
                                            </coverlabel>
                                            <div class="input-group">
                                                <img src="../../assets/rp.svg" alt="Currency Icon" class="input-group-text custom-icon" style={{borderRight: "none", marginTop: "5px"}} />
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"
                                                style={{fontSize: "16px", marginTop: "5px", borderLeft: "none"}} />
                                            </div>
                                        </div>


                                    </form>
                                </div>

                                <div className="gambar">
                                    <h1>
                                        Gambar sampul
                                    </h1>
                                    
                                    < DropzoneComponent />
                                    <div className="inisiator">
                                        <h2>Inisiator</h2>
                                        <h3>
                                            <img src="../../assets/profil-donatur.svg">
                                            </img>
                                            <p>Administrator</p>
                                        </h3>
                                    </div>

                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}