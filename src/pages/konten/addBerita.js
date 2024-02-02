import React, { useState, useRef } from "react";
import Sidebar from "../../components/sidebar";
import Nav from "../../components/nav";
import Button from "react-bootstrap/Button";
import "../../css/addberita.css";

export default function AddBerita() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  //   const DragDropFiles = () => {

  //   }
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

//   if (files)
//     return (
//       <div className="uploads">
//         <ul>
//           {Array.from(files).map((file, idx) => (
//             <li key={idx}>{file.name}</li>
//           ))}
//         </ul>
//       </div>
//     );

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
          className={`col p-0 min-vh-100 ${
            toggle ? "offset-md-2 col-md-10" : "col-md-12"
          }`}
          style={{ backgroundColor: "#EDF6F0" }}
        >
          <Nav Toggle={Toggle} />
          <div className="px-3 px-md-4 py-md-4">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <Button
                  href="/berita"
                  variant="outline-success-none fs-6 fw-semibold text-black"
                  className="d-flex"
                >
                  <img src="../assets/berita/arrow-left.svg" />
                  <h2 className="fs-6 fw-semibold pt-1 ms-2">Kembali</h2>
                </Button>
                <div className="d-flex">
                  <Button variant="outline-secondary fs-6 fw-semibold text-black">
                    Simpan sebagai draft
                  </Button>{" "}
                  <Button
                    variant="outline-success fs-6 ms-3 fw-semibold text-white"
                    style={{ backgroundColor: "#078D41" }}
                  >
                    Publish sekarang
                  </Button>{" "}
                </div>
              </div>
            </div>
            <div className="container bg-white rounded-4 p-4">
              <p className="fw-semibold text-black pb-2">Buat Berita</p>
              <div class="input-group mb-3">
                {/* <span class="input-group-text" id="inputGroup-sizing-default">Default</span> */}
                <input
                  type="text"
                  placeholder="Berikan ini judul"
                  className="custom-input fw-semibold"
                />
              </div>
              <div className="mb-4">
              {!files ? (
                  <div
                    className="dropzone"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current.click()}
                  >
                    <img
                      src="../assets/berita/gallery-icon.svg"
                      alt="Gallery icon"
                    />
                    <div className="d-flex fw-bold text-center">
                      <p>
                        Drag & drop image to upload, or{" "}
                        <span className="ms-1 text-primary">browse</span>
                      </p>
                    </div>
                    <p className="text-secondary fw-regular text-center">
                      Minimum 1080px width recommended. Max 5MB each (10MB for
                      videos)
                    </p>
                    <div className="d-flex">
                      <div className="pe-3 col d-flex">
                        <div>
                          <img src="../assets/berita/dot-drag.svg" alt="Dot" />
                        </div>
                        <span>
                          Good resolution images (png, jpg) or video (mp4)
                        </span>
                      </div>
                      <div className="ps-3 col d-flex">
                        <div>
                          <img src="../assets/berita/dot-drag.svg" alt="Dot" />
                        </div>
                        <span>Only upload media you own the rights to</span>
                      </div>
                    </div>
                    <input
                      type="file"
                      multiple
                      onChange={(event) => setFiles(event.target.files)}
                      hidden
                      ref={inputRef}
                    />
                  </div>
                ) : (
                    <div className="uploads">
                    {Array.from(files).map((file, index) => (
                      <div key={index} className="uploaded-image">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Uploaded file ${index + 1}`}
                          className="img-fluid"
                        />
                        <div className="image-actions">
                          <button>
                            Hapus
                          </button>
                          <button onClick={() => inputRef.current.click()}>
                            Ganti Foto
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="col-6 pe-4">
                  <p className="fw-medium mb-2">Tanggal</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="06 October 2023"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-6 ps-4">
                  <p className="fw-medium mb-2">Jurnalis</p>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Nama jurnalis"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Isi Berita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
