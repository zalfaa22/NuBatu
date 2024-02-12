import React, { useState } from "react";
import "../css/addcampaign.css";
import DragDropFiles from "../components/dropzone";

export default function AddCampaign() {
    // state untuk menampilkan pop-up
    const [showPopup, setShowPopup] = useState(false);


    const [formData, setFormData] = useState({
        namaProgram: "",
        deskripsi: "",
        danaDiajukan: "",
        gambarSampul: null // Memantau apakah gambar telah dipilih di Dropzone
    });
    const [tempFormData, setTempFormData] = useState(null); // State untuk menyimpan sementara data form yang diperbarui
    const [approvalStatus, setApprovalStatus] = useState(null); // State untuk menyimpan status persetujuan

    const togglePopup = () => {
        setShowPopup(prevShowPopup => !prevShowPopup); // Menggunakan prevState untuk memastikan perubahan state yang benar
        // Reset tempFormData saat pop-up ditutup
        if (showPopup) {
            setTempFormData(null);
        }
    };


    // Fungsi untuk memeriksa apakah semua input telah diisi
    const isFormFilled = () => {
        return (
            formData.namaProgram.trim() !== "" &&
            formData.deskripsi.trim() !== "" &&
            formData.danaDiajukan.trim() !== "" &&
            formData.gambarSampul !== null
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageSelect = (imageFile) => {
        console.log("Image file selected:", imageFile); // Tambahkan log di sini
        setFormData({
            ...formData,
            gambarSampul: imageFile // Simpan file gambar ke dalam state
        });
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            namaProgram: document.getElementById('exampleInputEmail1').value,
            deskripsi: document.getElementById('exampleInputPassword1').value,
            danaDiajukan: document.getElementById('danaDiajukan').value,
        });
        handleVerification(); // Memanggil fungsi untuk verifikasi form setelah pembaruan state
    };


    const handleVerification = () => {
        if (isFormFilled()) {
            togglePopup();
            console.log("FormData before popup:", formData); // Tambahkan log di sini
            // Lakukan penanganan data form di sini (misalnya, kirim ke backend)
        } else {
            alert("Silakan isi semua input dan unggah gambar terlebih dahulu.");
        }
    };

    const handleApprovalStatusChange = (status) => {
        setTempFormData({ ...formData }); // Memperbarui tempFormData dengan nilai formData yang terbaru
        setApprovalStatus(status);
    };


    const handlePopupClose = () => {
        if (tempFormData && isFormFilled(tempFormData)) {
            setFormData(tempFormData);
            togglePopup();
        } else {
            alert("Silakan isi semua input dan unggah gambar terlebih dahulu.");
        }
    };



    return (
        <div className="content">
            <form onSubmit={handleFormSubmit}>
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
                                <button className="verif" onClick={togglePopup}>Verifikasi Program</button>

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
                                        <label for="exampleInputEmail1" class="form-label">Nama Program</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Nama Program"
                                            style={{ fontSize: "16px", marginTop: "5px" }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="E.g. Deskripsi Detail"
                                            style={{ fontSize: "16px", marginTop: "5px" }}>
                                        </textarea>
                                    </div>

                                    <hr className="my-2" />

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">
                                            Dana yang diajukan
                                        </label>
                                        <div class="input-group">
                                            <img src="../../assets/rp.svg" alt="Currency Icon" class="input-group-text custom-icon" style={{ borderRight: "none", marginTop: "5px" }} />
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="danaDiajukan"  // Tambahkan id di sini
                                                aria-describedby="emailHelp"
                                                placeholder="0"
                                                style={{ fontSize: "16px", marginTop: "5px", borderLeft: "none" }}
                                            />

                                        </div>
                                    </div>


                                </form>
                            </div>

                            <div className="gambar">
                                <h1 className="judul">
                                    Gambar sampul
                                </h1>
                                <h2 className="dd">
                                    <DragDropFiles handleImageSelect={handleImageSelect} />
                                </h2>


                                <div className="inisiator">
                                    <h2>Inisiator</h2>
                                    <h3>
                                        <img src="../../assets/profil-donatur.svg" alt="Profil Donatur" />
                                        <p>Administrator</p>
                                    </h3>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </form>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        {/* Menampilkan nilai dari form yang diisi */}
                        <h1>Verifikasi Program</h1>
                        <div className="detail-popup">
                            {/* Menampilkan gambar yang dipilih */}
                            {formData.gambarSampul && (
                                <div>
                                    <p className="title">Sampul pratinjau</p>
                                    {/* Tampilkan gambar dengan URL.createObjectURL */}
                                    <img className="gambar-popup" src={URL.createObjectURL(formData.gambarSampul)} alt="Gambar Sampul" />
                                </div>
                            )}
                            <div className="popup-kanan">
                                <ul className="title">Judul
                                    <br />
                                    <p className="formData">{formData.namaProgram}</p>
                                </ul>
                                <ul className="title">Deskripsi
                                    <br />
                                    <p className="formData">{formData.deskripsi}</p>
                                </ul>
                                <ul className="dua-dana">
                                    <p className="title">Dana yang diajukan
                                        <br />
                                        <p>
                                            <p className="konten-title d-flex gap-2" style={{ alignItems: "center", marginTop: "10px" }}>
                                                <img src="../../assets/rp.svg"></img>
                                                <p className="formData" style={{ margin: 0 }}>{formData.danaDiajukan}</p>
                                            </p>
                                        </p>
                                    </p>
                                    <p className="title">Dana yang diajukan
                                        <br />
                                        <p>
                                            <p className="konten-title" style={{ alignItems: "center", marginTop: "10px" }}>
                                                <img src="../../assets/profil-donatur.svg" style={{ width: "40px" }}></img>
                                                <p className="formData" style={{ margin: 0 }}>Administrator</p>
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
            )}
        </div>
    );
}