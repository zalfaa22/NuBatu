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
    Array.from(fileList).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        setImagePreviews([...previews]);
      };
      reader.readAsDataURL(file);
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
            <img key={idx} src={preview} alt={`Preview ${idx}`} />
          ))}
        </div>
        <div className="actions" style={{marginTop: "-34px", position: "absolute"}}>
        <img onClick={() => setFiles(null)} src="../../assets/delete.svg" style={{padding: "8px", border: "1.5px solid red", borderBottomLeftRadius: "25%", backgroundColor: "#F9F5FF"}}></img>
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