import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import '../css/detailchat.css'
import Button from "react-bootstrap/Button";

export default function DetailChat() {
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
                    <div className="bungkus-chat">
                        <div className="arrow">
                            <img src="../../assets/arrow.svg"></img>
                            <p>Kembali</p>
                        </div>

                        {/* putih */}
                        <div className="bungkus-ziyad">
                            <div className="oren d-flex grid gap-4 align-start">
                                <img src="../../assets/oren.svg"    ></img>
                                <div>
                                    <h1 style={{ fontSize: "22px" }}>Ziyad Ahmad Baharuddin</h1>
                                    <h2 style={{ fontSize: "18px", color: "#404040" }}>Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadiahkan fatihah kepada orang yang non Muslim, atau bertawasul untuk non Muslim tersebut? Kalau boleh, kira² apa dasar referensi kitabnya? Atau dalam sejarah, pernahkah sahabat atau Rasulullah sendiri melakukannya? Jika tidak, mengapa bisa demikian?</h2>
                                    <h3 style={{ fontSize: "16px", color: "#808080" }}>
                                        Sep 26, 2023
                                    </h3>
                                </div>
                            </div>

                            {/* form */}
                            <div class="pt-5">
                                <label for="exampleFormControlInput1" class="form-label">Dijawab oleh</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nama Kyai/Ust/Habib" />
                            </div>
                            <div className="jawaban" style={{ position: 'relative' }}>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Jawaban"
                                    style={{paddingRight: "100px"}}></textarea>
                                    <button style={{ position: 'absolute', top: 35, right: 10, backgroundColor: "#009B4C", width: "80px", height: "40px", borderRadius: "5px", border: "none", fontSize: "12px", color: "white" }}>Reply</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
