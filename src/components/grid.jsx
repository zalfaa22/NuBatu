import React, { useState } from "react";
import "../css/grid.css";

const Gridfoto = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section className="bungkus-grid">
      <label className="cover-label" style={{ fontSize: "14px", width: "100%", height: "260px", display: "flex", alignItems: "center", border: "2px dashed #808080" }}>
        <img src="../../assets/gallery.svg"></img>
        <h1 className='lg-d-flex'>
          <span className="judul-drag" style={{ marginRight: "5px", fontWeight: "bold", textAlign: "center" }}>Drag & drop image to upload, or</span>
          <span className="browse" style={{ fontSize: "14px", color: "#0047FF", fontWeight: "bold" }}>browse</span>
        </h1>
        <span style={{ fontSize: "12px", color: "#808080", fontWeight: "600", marginTop: "-10px" }}>1208x840px size required in PNG or JPG format only, maximum 5MB.</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
          className="input-grid"
        />
      </label>
      <br />

      <input className="input-grid" type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 5 ? (
          <p className="error">
            Anda tidak dapat mengunggah lebih dari 5 gambar! <br />
            <span>
              Hapus <b> {selectedImages.length - 5} </b> gambar{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images" style={{justifyContent: "space-between"}}>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  <img src="../../assets/delete.svg" style={{width: "20px", marginTop: "10px"}}></img>
                </button>
                <p style={{marginTop: "10px"}}>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Gridfoto;