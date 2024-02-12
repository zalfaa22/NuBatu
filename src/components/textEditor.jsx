import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./css/texteditor.css";

export default function TextEditor() {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
  const [content, setContent] = useState("");

  const handleButtonClick = (command, value = null) => {
    document.execCommand(command, false, value);
    setContent(document.getElementById("text-input-panel").innerHTML);
  };

  const handleCreateLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      handleButtonClick("createLink", url);
    }
  };

  const handleFormatBlockChange = (event) => {
    const value = event.target.value;
    handleButtonClick("formatBlock", value);
  };

  useEffect(() => {
    const alignButtons = document.querySelectorAll(".align");

    alignButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const alignment = button.getAttribute("data-align");
        handleButtonClick("justify" + alignment);
      });
    });
  }, []);

  const handleQuote = (command, value = null) => {
    if (command === "quote") {
      // Ambil teks yang diseleksi
      const selection = window.getSelection();
      const selectedText = selection.toString();
      // Tambahkan tanda kutip di awal dan akhir teks yang diseleksi
      const newText = '"' + selectedText + '"';
      // Setel kembali konten dengan tanda kutip yang ditambahkan
      document.execCommand("insertText", false, newText);
    } else {
      document.execCommand(command, false, value);
    }
    setContent(document.getElementById("text-input-panel").innerHTML);
  };

  return (
    <>
      <div className="">
        <div className="format-panel">

          {/* Heading Options */}
          <select
            id="formatBlock"
            className="select-heading"
            onChange={handleFormatBlockChange}
          >
            <option value="P">Normal</option>
            <option value="H1">Heading 1</option>
            <option value="H2">Heading 2</option>
            <option value="H3">Heading 3</option>
            <option value="H4">Heading 4</option>
            <option value="H5">Heading 5</option>
            <option value="H6">Heading 6</option>
          </select>

          {/* Text Format */}
          <div className="d-flex">
          <button
            id="bold"
            className="format-option-btn1 format"
            onClick={() => handleButtonClick("bold")}
          >
            <img src="../assets/berita/bold-icon.svg" className="img-fluid" />
          </button>
          <button
            id="italic"
            className="format-option-btn2 format"
            onClick={() => handleButtonClick("italic")}
          >
            <img src="../assets/berita/italic-icon.svg" className="img-fluid" />
          </button>
          <button
            id="underline"
            className="format-option-btn3 format"
            onClick={() => handleButtonClick("underline")}
          >
            <img
              src="../assets/berita/underline-icon.svg"
              className="img-fluid"
            />
          </button>
          </div>

          {/* Align Text */}
          <div className="d-flex">
          <button
            id="justifyLeft"
            className="format-option-btn1 align"
            onClick={() => handleButtonClick("justifyLeft")}
          >
            <img
              src="../assets/berita/align-left-icon.svg"
              className="img-fluid"
            />
          </button>
          <button
            id="justifyCenter"
            className="format-option-btn2 align"
            onClick={() => handleButtonClick("justifyCenter")}
          >
            <img
              src="../assets/berita/align-center-icon.svg"
              className="img-fluid"
            />
          </button>
          <button
            id="justifyRight"
            className="format-option-btn3 align"
            onClick={() => handleButtonClick("justifyRight")}
          >
            <img
              src="../assets/berita/align-right-icon.svg"
              className="img-fluid"
            />
          </button>
          </div>

          {/* Link & Quote */}
          <div className="d-flex">
          <button
            id="createLink"
            className="format-option-btn1"
            onClick={handleCreateLink}
          >
            <img src="../assets/berita/link-icon.svg" className="img-fluid" />
          </button>
          <button
            id="createLink"
            className="format-option-btn3"
            onClick={() => handleQuote("quote")}
          >
            <img src="../assets/berita/quote-icon.svg" className="img-fluid" />
          </button>
          </div>

        </div>
        <div
          id="text-input-panel"
          className="text-input-panel"
          contenteditable="true"
        ></div>
      </div>
    </>
  );
}
