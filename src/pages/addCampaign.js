import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { addEmployee, getEmployeeById, editEmployee } from '../services/localstorage';
import { getListOfEmployees } from '../services/localstorage';
import "../css/addcampaign.css";
import DragDropFiles from "../components/dropzone";
import Modal from "./modal";

export default function AddCampaign() {
    const { handleInputChange, inputValues, resetForm, setForm } = useForm({ 
        namaProgram: "",
        deskripsi: "",
        danaDiajukan: ""
    });
    
    const [showPopup, setShowPopup] = useState(false);
    const [approvalStatus, setApprovalStatus] = useState(null);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleImageSelect = (imageFile) => {
        setForm({
            ...inputValues,
            gambarSampul: imageFile
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Lakukan penanganan data form di sini (misalnya, kirim ke backend)
        console.log("Form data:", inputValues);
    };

    const handleApprovalStatusChange = (status) => {
        setApprovalStatus(status);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const navigate = useNavigate();

    const {id} = useParams();

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            if (employee) {
                setForm(employee);
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
        localStorage.setItem('employees', JSON.stringify(getListOfEmployees()));
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
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
                                <form className="nam-prog" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nama Program</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Nama Program"
                                            name="namaProgram"
                                            value={inputValues.namaProgram}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="deskripsi" className="form-label">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="deskripsi"
                                            placeholder="E.g. Deskripsi Detail"
                                            name="deskripsi"
                                            value={inputValues.deskripsi}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>

                                    <hr className="my-2" />

                                    <div className="mb-3">
                                        <label htmlFor="danaDiajukan" className="form-label">
                                            Dana yang diajukan
                                        </label>
                                        <div className="input-group">
                                            <img src="../../assets/rp.svg" alt="Currency Icon" className="input-group-text custom-icon" style={{ borderRight: "none" }} />
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="danaDiajukan"
                                                aria-describedby="emailHelp"
                                                placeholder="0"
                                                name="danaDiajukan"
                                                value={inputValues.danaDiajukan}
                                                onChange={handleInputChange}
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

            <Modal
    showPopup={showPopup}
    inputValues={inputValues}
    togglePopup={togglePopup}
    handleApprovalStatusChange={handleApprovalStatusChange}
    handlePopupClose={handlePopupClose}
    approvalStatus={approvalStatus}
    gambarSampul={inputValues.gambarSampul ? inputValues.gambarSampul : null}
/>

{
        showAlert && (
          <div className='px-5'>
            <div className='alert alert-success' role='alert'>
              Well done boss!!!
            </div>
          </div>
        )
      }

        </div>
    );
}
