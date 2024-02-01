import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "../css/tabel.css";

const Tabel = ({ onFilesSelected, width, height }) => {
    const [files, setFiles] = useState([]);

    // Menangani perubahan pada input file
    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    // Menangani pelepasan file ke area drag-and-drop
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    // Menghapus file dari daftar
    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // Mengirimkan files ke parent component ketika terjadi perubahan pada files
    useEffect(() => {
        if (typeof onFilesSelected === 'function') {
            onFilesSelected(files);
        }
    }, [files, onFilesSelected]);

   return (
        <section className="drag-drop" style={{ width: width, height: height }}>
            <div
                className={`document-uploader ${files.length > 0 ? "upload-box active" : "upload-box"
                    }`}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <div className="upload-info">
                    <img src="../../assets/gallery.svg" className="galeri"></img>
                    <div>
                        <p>Drag & drop image to upload, or browse</p>
                        <p>
                            800x600px size required in PNG or
                            JPG format only.
                        </p>
                    </div>
                </div>
                <input
                    type="file"
                    hidden
                    id="browse"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.pptx,.txt,.xlsx"
                    multiple
                />
                <label htmlFor="browse" className="browse-btn">
                    Telusuri file
                </label>

                {files.length > 0 && (
                    <div className="file-list">
                        <div className="file-list__container">
                            {files.map((file, index) => (
                                <div className="file-item" key={index}>
                                    <div className="file-info">
                                        <p>{file.name}</p>
                                    </div>
                                    <div className="file-actions">
                                        <MdClear onClick={() => handleRemoveFile(index)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {files.length > 0 && (
                    <div className="success-file">
                        <AiOutlineCheckCircle
                            style={{ color: "#6DC24B", marginRight: 1 }}
                        />
                        <p>{files.length} file(s) terpilih</p>
                    </div>
                )}
            </div>

        </section>
    );
};

export default Tabel;
