import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/grid.css";

const Gridfoto = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = "";
  };

  const deleteHandler = (index, image) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    URL.revokeObjectURL(image);
    if (index === activeIndex) {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    if (selectedImages.length === 0) {
      setActiveIndex(0);
    }
  }, [selectedImages]);

  const handleCarouselDelete = () => {
    deleteHandler(activeIndex, selectedImages[activeIndex]);
  };

  return (
    <section className="bungkus-grid">
      {/* Input untuk mengunggah gambar */}
      <label className="cover-label">
        <img className="img-grid" src="../../assets/gallery.svg" alt="gallery"></img>
        <h1 className='lg-d-flex' style={{width: "100%"}}>
          <span className="judul-drag">Drag & drop image to upload, or</span>
          <span className="browse">browse</span>
        </h1>
        <span className="png">1208x840px size required in PNG or JPG format only, maximum 5MB.</span>
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

      {/* Input untuk mengunggah gambar (tombol browse) */}
      <input className="input-grid" type="file" multiple />

      {/* Pesan kesalahan jika melebihi jumlah maksimum gambar yang diizinkan */}
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
      
      {/* Tampilan gambar yang dipilih */}
      {selectedImages.length > 0 && (
        <div className="images">
          {selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img className="gambar-input" src={image} height="200" width="100%" alt="upload" />
                <button onClick={() => deleteHandler(index, image)}>
                  <img src="../../assets/delete.svg" style={{width: "15px", marginTop: "10px"}} alt="delete" />
                </button>
                <p style={{marginTop: "10px", fontSize: "15px"}}>{index + 1}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Carousel untuk menampilkan gambar */}
      {selectedImages.length > 0 && (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{marginTop: "30px", width: "100%"}}>
          <div className="carousel-inner">
            {selectedImages.map((image, index) => (
              <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={image}>
                <img src={image} className="d-block" alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <div className="ganti-hapus">
            <button className="ganti">
              Ganti 
            </button>
            <button className="hapus" onClick={handleCarouselDelete}>
              Hapus
              <img className="trash" src="../../assets/trash.svg" alt="delete" />
            </button>
          </div>
         
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => setActiveIndex((activeIndex + selectedImages.length - 1) % selectedImages.length)}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <p className="move">Move Left or Right</p>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => setActiveIndex((activeIndex + 1) % selectedImages.length)}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gridfoto;
