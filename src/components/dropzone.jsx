import React, { useState, useRef } from "react";
import "../css/dropzone.css";

const DragDropFiles = ({ handleImageSelect }) => {
  const [files, setFiles] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
    generateImagePreviews(droppedFiles);
    handleImageSelect(droppedFiles[0]); // Panggil handleImageSelect dengan file pertama yang dipilih
  };

  const handleFileSelection = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    generateImagePreviews(selectedFiles);
    handleImageSelect(selectedFiles[0]); // Panggil handleImageSelect dengan file pertama yang dipilih
  };

  const generateImagePreviews = (fileList) => {
    const previews = [];
    Array.from(fileList).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        setImagePreviews([...previews]);
      };
      reader.readAsDataURL(file);
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    height: '260px',
    textAlign: 'center',
    width: "100%",
    backgroundColor: "#F6FFF9",
  };

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {/* {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))} */}
        </ul>
        <div className="image-previews">
          {imagePreviews.map((preview, idx) => (
            <img
              key={idx}
              src={preview}
              alt={`Preview ${idx}`}
              style={{ maxWidth: '410px', height: 'auto' }}
            />
          ))}
        </div>
        <div className="actions" style={{ marginTop: "-34px", position: "absolute" }}>
          <img onClick={() => setFiles(null)} src="../../assets/delete.svg" style={{ padding: "8px", border: "1.5px solid red", borderBottomLeftRadius: "25%", backgroundColor: "#F9F5FF" }}></img>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={containerStyle}
      >
        <div>
          <img src="../../assets/gallery.svg" alt="Gallery" />
          <h1 style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}>
            Drag & drop image to upload, or{' '}
            <span
              style={{ color: '#0047FF', marginLeft: '5px', cursor: "pointer" }}
              onClick={() => inputRef.current.click()}
            >
              browse
            </span>
          </h1>
          <h2 style={{ fontSize: '12px', color: '#808080', textAlign: 'center' }}>
            1208x840px size required in PNG or JPG format only, maximum 5MB.
          </h2>
          <input
            type="file"
            multiple
            onChange={handleFileSelection}
            hidden
            // accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
        {/* <button onClick={() => inputRef.current.click()}>Select Files</button> */}
      </div>
    </>
  );
};

export default DragDropFiles;
