import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import '../css/fotodetail.css'
import DragDropFiles from "../components/grid";

export default function FotoDetail() {
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
                    <div className="bungkus-foto">
                        <div className="rinci">
                            <div className="foto">
                                <a href="/campaign" className="back">
                                    <img src="../../assets/arrow.svg" className="arrow">
                                    </img>
                                    <h1 className="back2">
                                        Kembali
                                    </h1>
                                </a>
                                <div className="button-kanan">
                                    <button className="save">Simpan Pengajuan</button>
                                    <button className="verifikasi">Verifikasi Program</button>
                                </div>
                            </div>
                            <div className="umum-menu">
                                <a href="/addCampaign" style={{ textDecoration: 'none' }}>
                                    <p className="info-umum">Informasi Umum</p>
                                </a>

                                <button className="foto-detail">Foto Detail</button>
                            </div>

                            <div className="konten-putih">

                                <div className="judul-gambar-detail">
                                    <div className="jud">
                                        <h1>
                                            Gambar detail (3-5 diperlukan untuk mendapatkan persetujuan)
                                        </h1>
                                        <h2>
                                            <img src="../../assets/seru.svg" className="seru">
                                            </img>
                                            <p className="require">Require</p>
                                        </h2>
                                    </div>

                                    < DragDropFiles />

                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}