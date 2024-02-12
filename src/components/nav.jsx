import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Nav({Toggle}) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-white  px-3 d-block d-md-none" style={{ backgroundColor: "#EDF6F0" }}>
        <i className="navbar-brand bi bi-justify-left fs-6" onClick={Toggle}></i>
      </nav>
    </>
  );
}
