import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Button from "react-bootstrap/Button";

export default function Berita() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {/* Sidebar */}
        {toggle && (
          <div className="sidebar col-md-2 vh-100 position-fixed" style={{backgroundColor: "#060313"}}>
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
          <div className="px-4 py-md-4">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <h2 className="fs-2 fw-bold">Berita</h2>
                <img src="../assets/konten/profile.svg" />
              </div>
            </div>
            <div className="mb-5">
              <div className="d-flex justify-content-between">
                <div>
                  <Button variant="outline-success fs-6 fw-semibold text-black">
                    Success
                  </Button>{" "}
                  <Button
                    variant="outline-success-none fs-6 fw-semibold text-black"
                  >
                    Draft
                  </Button>{" "}
                  <Button
                    variant="outline-success-none fs-6 fw-semibold text-black"
                  >
                    Publish
                  </Button>{" "}
                </div>
                <div className="">
                  <Button
                    variant="outline-success fs-6 fw-semibold text-black"
                  >
                    Pencarian
                    <img
                      className="ms-2"
                      src="../assets/search-normal.svg"
                      alt="Search"
                    />
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
