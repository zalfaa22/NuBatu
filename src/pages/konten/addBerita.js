import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import TextEditor from "../../components/textEditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/addberita.css";

export default function AddBerita() {
  const [startDate, setStartDate] = useState(null);
  const [isImageDisplayed, setIsImageDisplayed] = useState(false);
  const fileInputRef = useRef(null);
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

  const handleDeleteImage = () => {
    setFiles(null); // Menghapus file
    setIsImageDisplayed(false); // Menandai bahwa gambar tidak ditampilkan
  };

  const handleReplaceImage = () => {
    fileInputRef.current.click(); // Panggil fungsi click pada input file saat tombol "Ganti Foto" diklik
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
      <div className="content h-auto" style={{ backgroundColor: "#EDF6F0" }}>
        <div className="px-3 px-md-4 py-4">
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <Button
                href="/berita"
                variant="outline-success-none fs-6 fw-semibold text-black"
                className="d-flex add-kembali-btn"
              >
                <img src="../assets/berita/arrow-left.svg" />
                <h2 className="fs-6 fw-semibold pt-1 ms-2">Kembali</h2>
              </Button>
              <div className="d-flex">
                <Button variant="outline-secondary add-draft-btn fw-semibold text-black">
                  Simpan sebagai draft
                </Button>{" "}
                <Button
                  variant="outline-success add-publish-btn ms-3 fw-semibold text-white"
                  style={{ backgroundColor: "#078D41" }}
                >
                  Publish sekarang
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-4 p-4">
            <p className="add-title fw-semibold text-black pb-2">Buat Berita</p>
            <div class="input-group mb-3">
              <input
                type="text"
                placeholder="Berikan ini judul"
                className="input-judul-brt fw-semibold"
              />
            </div>
            <div className="mb-4">
              {!files ? (
                <div
                  className="dropzone-berita"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current.click()}
                >
                  <img
                    src="../assets/berita/gallery-icon.svg"
                    alt="Gallery icon"
                    className="dragdrop-img-icon"
                  />
                  <div className="d-flex fw-bold text-center">
                    <p className="dragdrop-text1">
                      Drag & drop image to upload, or{" "}
                      <span className="ms-1 text-primary">browse</span>
                    </p>
                  </div>
                  <p className="dragdrop-text2 text-secondary fw-regular text-center">
                    Minimum 1080px width recommended. Max 5MB each (10MB for
                    videos)
                  </p>
                  <div className="d-flex">
                    <div className="pe-1 pe-md-3 col d-flex">
                      <div>
                        <img src="../assets/berita/dot-drag.svg" alt="Dot" className="dragdrop-dot-img"/>
                      </div>
                      <span className="dragdrop-text2">
                        Good resolution images (png, jpg) or video (mp4)
                      </span>
                    </div>
                    <div className="ps-1 ps-md-3 col d-flex">
                      <div>
                        <img src="../assets/berita/dot-drag.svg" alt="Dot" className="dragdrop-dot-img" />
                      </div>
                      <span className="dragdrop-text2">Only upload media you own the rights to</span>
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
                        <button className="btn-hapus-imgbrt" onClick={handleDeleteImage}>Hapus</button>
                        <button className="btn-ganti-imgbrt" onClick={handleReplaceImage}>
                          Ganti Foto <img src="../assets/berita/trash-white-icon.svg"/>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="d-md-flex justify-content-between mb-3">
              <div className="col-12 col-md-6 pe-md-4">
                <p className="fw-medium mb-2 dragdrop-text3">Tanggal</p>
                <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  <img src="../assets/berita/date-icon.svg" className="img-fluid calendar-icon-brt" style={{width: "20px"}}/>
                </span>
                <input
                  type="text"
                  class="form-control input-jurnalis"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              {/* <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        <img src="../assets/berita/date-icon.svg" className="img-fluid" style={{ width: "20px" }} />
      </span>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div> */}
              </div>
              <div className="col-12 col-md-6 ps-md-4">
                <p className="fw-medium mb-2 dragdrop-text3">Jurnalis</p>
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control rounded input-jurnalis"
                    placeholder="Nama jurnalis"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="dragdrop-text3">Isi Berita</p>
              <TextEditor/>
            </div>
          </div>
        </div>
        {/* Hidden input file untuk menggantikan gambar */}
      <input
        type="file"
        multiple
        onChange={(event) => setFiles(event.target.files)}
        hidden
        ref={fileInputRef}
      />
      </div>
  );
}
