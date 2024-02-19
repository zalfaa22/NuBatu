import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { addEmployee, getEmployeeById, editEmployee } from '../services/localstorage';
import { getListOfEmployees } from '../services/localstorage';
import "../css/addcampaign.css";
import DragDropFiles from "../components/dropzone";

export default function EditCampaign() {
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

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

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
            console.log("FormData before popup:", formData); // 
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


    const navigate = useNavigate();

    const { id } = useParams();

    const [showAlert, setShowAlert] = useState(false);

    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        nama: '',
        deskripsi: '',
        dana: '',
        gambar: ''
    })

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            if (employee) {
                setForm({
                    nama: employee.namaProgram,
                    deskripsi: employee.deskripsi,
                    dana: employee.danaDiajukan,
                    gambar: employee.gambarSampul
                });
            } else {
                console.log(`Employee with id ${id} not found.`);
            }
        }
    }, [id]);
    




    const handleBack = () => {
        navigate('/');
    };

    const handleAddEmployee = () => {
        setShowAlert(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee(inputValues);
        setShowAlert(true);
        resetForm();
        // Tambahkan penyimpanan ke local storage di sini
        localStorage.setItem('employees', JSON.stringify(getListOfEmployees())); // Menggunakan getListOfEmployees() untuk mendapatkan daftar karyawan
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };


    const location = useLocation();
    const { campaign } = location.state;

    useEffect(() => {
        if (campaign) {
          setForm({
            nama: campaign.nama,
            deskripsi: campaign.deskripsi,
            dana: campaign.danaDiajukan,
            gambar: campaign.gambarSampul
          });
        }
      }, [campaign]);

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

                            <div className="">
                                {/* <button className="simpan">Simpan Pengajuan</button> */}
                                <button className="verif" onClick={togglePopup}>Edit Program</button>

                            </div>
                        </div>
                        {/* <div className="umum">
                            <button className="info">Informasi Umum</button>
                            <a href="/fotoDetail" style={{ textDecoration: 'none' }}>
                                <p>Foto Detail</p>
                            </a>

                        </div> */}

                        <div className="putih">
                            <div className="form">
                                <div className="judul">
                                    Detail Program
                                </div>
                                <form className="nam-prog">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nama Program</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Nama Program"
                                            onChange={handleInputChange}
                                            value={inputValues.nama}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            aria-describedby="emailHelp"
                                            placeholder="E.g. Deskripsi Detail"
                                            onChange={handleInputChange}
                                            value={inputValues.deskripsi}
                                        />
                                    </div>

                                    <hr className="my-2" />

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">
                                            Dana yang diajukan
                                        </label>
                                        <div class="input-group">
                                            <img src="../../assets/rp.svg" alt="Currency Icon" class="input-group-text custom-icon" style={{ borderRight: "none" }} />
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="danaDiajukan"
                                                aria-describedby="emailHelp"
                                                placeholder="0"
                                                onChange={handleInputChange}
                                                value={inputValues.dana}
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

            {/* POP UP */}
        </div>
    );
}