import React, { useState, useRef } from "react";

const DragDropFiles = () => {
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
  };

  const handleFileSelection = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    generateImagePreviews(selectedFiles);
  };

  const generateImagePreviews = (fileList) => {
    const previews = [];
  
    const processFile = (file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews[index] = e.target.result;
  
        // If all previews are loaded, update the state
        if (index === fileList.length - 1) {
          setImagePreviews([...previews]);
        }
      };
      reader.readAsDataURL(file);
    };
  
    Array.from(fileList).forEach((file, idx) => {
      processFile(file, idx);
    });
  };

  
  const handleUpload = () => {
    // Your upload logic here
    // e.g., send files to the server using FormData
    // const formData = new FormData();
    // formData.append("Files", files);
    // fetch("link", {
    //   method: "POST",
    //   body: formData
    // });
    setFiles(null);
  };

  

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    border: '2px solid #808080',
    height: '260px',
    borderRadius: '10px',
    borderStyle: 'dashed',
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
            <img key={idx} src={preview} alt={`Preview ${idx}`} style={{ maxWidth: '100%', maxHeight: '200px' }} />
          ))}
        </div>
        <div className="actions" style={{marginTop: "10px"}}>
          <button onClick={() => setFiles(null)} style={{marginRight: "10px", border: "1.5px solid red", borderRadius: "8px", padding: "5px", width: "90px", backgroundColor: "transparent"}}>Cancel</button>
          <button onClick={handleUpload} style={{marginRight: "10px", border: "1.5px solid #009B4C", borderRadius: "8px", padding: "5px", width: "90px", backgroundColor: "transparent"}}>Upload</button>
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
      >
        <div style={containerStyle}>
          <img src="../../assets/gallery.svg" alt="Gallery" />
          <h1 style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center', marginTop: "5px" }}>
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
