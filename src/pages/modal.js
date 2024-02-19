import React from "react";

export default function Modal({ showPopup, inputValues, togglePopup, handleApprovalStatusChange, handlePopupClose, approvalStatus, gambarSampul }) {

    

    return (
        showPopup && (
            <div className="popup-overlay-campaign">
                <div className="popup-campaign">
                    {/* Menampilkan nilai dari form yang diisi */}
                    <h1>Verifikasi Program</h1>
                    <div className="detail-popup">
                        {/* Menampilkan gambar yang dipilih */}
                        {inputValues.gambarSampul && (
                            <div>
                                <p className="title">Sampul pratinjau</p>
                                {/* Tampilkan gambar dengan URL.createObjectURL */}
                                <img className="gambar-popup" src={URL.createObjectURL(inputValues.gambarSampul)} alt="Gambar Sampul" />
                            </div>
                        )}
                        <div className="popup-kanan">
                            <ul className="title">Judul
                                <br />
                                <p className="inputValues" style={{fontWeight: "normal", color: "#808080"}}>{inputValues.namaProgram}</p>
                            </ul>
                            <ul className="title">Deskripsi
                                <br />
                                <p className="inputValues" style={{fontWeight: "normal", color: "#808080"}}>{inputValues.deskripsi}</p>
                            </ul>
                            <ul className="dua-dana">
                                <p className="title">Dana yang diajukan
                                    <br />
                                    <p>
                                        <p className="konten-title d-flex gap-2" style={{ alignItems: "center", marginTop: "10px" }}>
                                            <img src="../../assets/rp.svg"></img>
                                            <p className="inputValues" style={{fontWeight: "normal", color: "#808080", margin: 0}}>{inputValues.danaDiajukan}</p>
                                        </p>
                                    </p>
                                </p>
                                <p className="title">Dana yang diajukan
                                    <br />
                                    <p>
                                        <p className="konten-title" style={{ alignItems: "center", marginTop: "10px" }}>
                                            <img src="../../assets/profil-donatur.svg" style={{ width: "40px" }}></img>
                                            <p className="inputValues" style={{fontWeight: "normal", color: "#808080", margin: 0}}>Administrator</p>
                                        </p>
                                    </p>
                                </p>
                            </ul>
                            <ul className="title" style={{ marginTop: "-30px" }}>Persetujuan Program
                                <p style={{ marginTop: "10px" }}>
                                    <p className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="rejectCheckbox" value="rejected" onChange={() => handleApprovalStatusChange("rejected")} checked={approvalStatus === "rejected"} />
                                        <label className="form-check-label" htmlFor="rejectCheckbox" >Ditolak</label>
                                    </p>
                                    <p className="form-check form-check-inline" style={{ alignItems: "center" }}>
                                        <input className="form-check-input" type="checkbox" id="approveCheckbox" value="approved" onChange={() => handleApprovalStatusChange("approved")} checked={approvalStatus === "approved"} />
                                        <label className="form-check-label" htmlFor="approveCheckbox" >Diterima</label>
                                    </p>
                                </p>
                            </ul>
                            <ul className="pemberitahuan">
                                <span>Pemberitahuan : </span>Anda wajib melakukan checklist pada persetujuan untuk mengubah status pengajuan program pada dashboard. Ingat!, persetujuan ini permanen dan tidak dapat diubah.
                            </ul>
                            <ul className="button-dua d-flex" style={{ justifyContent: "space-between" }}>
                                <button onClick={handlePopupClose} className="kembali-campaign">
                                    <img src="../../assets/arrow.svg" style={{ width: "16px" }}></img>
                                    Kembali
                                </button>
                                <a href="/campaign">
                                    <button className="setuju" onClick={togglePopup}>
                                        Saya setuju
                                    </button>
                                </a>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
