import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";

export default function Beranda() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {/* Sidebar */}
        {toggle && (
          <div
            className="sidebar col-md-2 vh-100 position-fixed" style={{ backgroundColor: "#060313" }}>
            <Sidebar />
          </div>
        )}

        {/* Empty column for spacing when the sidebar is not visible */}
        {toggle && <div className="col-md-2"></div>}

        {/* Main content column */}
        <div
          className={`col p-0 vh-100 ${
            toggle ? "offset-md-2 col-md-10" : "col-md-12"
          }`}
          style={{ backgroundColor: "#EDF6F0" }}
        >
          <Nav Toggle={Toggle} />
          {/* taruh content di si */}
        </div>
      </div>
    </div>
  );
}
