import React, { useState } from 'react';
import { Container } from "react-bootstrap";

function Defaulthideshow() {
    const [showhide, setShowhide] = useState(false); // Menggunakan boolean untuk menentukan apakah "yes" atau "no"

    const handleToggle = () => {
        setShowhide(prevState => !prevState); // Toggle nilai boolean saat checkbox diklik
    };

    return (
        <div className="row">
            <div className="col-12 ms-3">
                <form className="row" style={{ backgroundColor: "white" }}>
                    <div className="col-auto">
                        <div className="text-white d-flex gap-1 align-items-start">
                            <input
                                type="checkbox"
                                name="userdetail"
                                checked={showhide}
                                onChange={handleToggle}
                                style={{ border: "1px solid black", width: "16px", height: "16px", marginLeft: "-14px" }} // Menghilangkan margin-left
                            />
                            <img src='../../assets/arrow-down.svg'></img>
                            {showhide ? null : <img src='../../assets/rotate.svg'></img>}
                            {showhide && ( // Jika showhide true, tampilkan bagian ini
                                <label className="form-label d-flex gap-2" style={{ marginLeft: "4px" }}> {/* Menambahkan margin-left */}
                                    <img src="../../assets/delete.svg" alt="delete icon" />
                                    <img src='../../assets/archive.svg'></img>
                                    <img src='../../assets/flag.svg'></img>
                                </label>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Defaulthideshow;
