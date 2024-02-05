import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "../../css/berita.css";

export default function Artikel() {
  return (
      <div className="content vh-100" style={{ backgroundColor: "#EDF6F0" }}>
        <div className="px-3 px-md-5 py-4">
          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Artikel</h2>
              <div className="d-flex">
                <img
                  src="../assets/berita/profile.svg"
                  className="profile-acc"
                />
              </div>
            </div>
          </div>
          <div className="mb-0">
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  variant="outline-success fs-6 fw-semibold text-black"
                  className="berita-btn1"
                >
                  Success
                </Button>{" "}
                <Button variant="outline-success-none fs-6 fw-semibold text-black" className="berita-btn2">
                  Draft
                </Button>{" "}
                <Button variant="outline-success-none fs-6 fw-semibold text-black" className="berita-btn3">
                  Publish
                </Button>{" "}
                <Dropdown className="dropdown-berita text-decoration-none">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Success
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Draft</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Publish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="">
                <Button
                  variant="outline-success fs-6 fw-semibold text-black"
                  className="berita-btn"
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
          <div className="">
            <div class="table-container-berita">
              <table class="table custom-table">
                <thead>
                  <tr className="title">
                    <th scope="col" style={{ padding: "1rem" }}>
                      Judul
                    </th>
                    <th scope="col" style={{ padding: "1rem" }}>
                      Status
                    </th>
                    <th scope="col" style={{ padding: "1rem" }}>
                      Jurnalis
                    </th>
                    <th
                      scope="col"
                      style={{ padding: "1rem", textAlign: "end" }}
                    >
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                      <img src="../assets/berita/1.svg" className="pe-3"></img>
                      <div className="d-block ">
                        <span className="title fw-semibold pt-5">
                          Kick Off Resepsi 1 Abad, PCNU Kota Batu Siapkan
                          Beragam ...
                        </span>
                        <div className="title fw-lighter d-flex  pt-1">
                          <a href="#">
                            <button className="edit-btn">
                              <img src="../assets/berita/edit-icon.svg" />
                              <span className="ms-1">edit</span>
                            </button>
                          </a>
                          <div className="ms-4">
                            <a href="#">
                              <button className="del-btn">
                                <img src="../assets/berita/trash-icon.svg" />
                                <span className="ms-1">hapus</span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="pt-2 me-5">
                        <img
                          src="../assets/berita/draft.svg"
                          className=""
                        ></img>
                      </div>
                    </td>
                    <td className="text-1 fw-normal py-3">W. Nadia</td>
                    <td className="text-1 fw-slug text-end py-3">
                      Okt 05, 2023
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                      <img src="../assets/berita/2.svg" className="pe-3"></img>
                      <div className="d-block ">
                        <span className="title fw-semibold">
                          Kick Off Resepsi 1 Abad, PCNU Kota Batu Siapkan
                          Beragam ...
                        </span>
                        <div className="title fw-lighter d-flex pt-1">
                          <div>
                            <a href="#">
                              <button className="edit-btn">
                                <img src="../assets/berita/edit-icon.svg" />
                                <span className="ms-1">edit</span>
                              </button>
                            </a>
                          </div>
                          <div className="ms-4">
                            <a href="#">
                              <button className="del-btn">
                                <img src="../assets/berita/trash-icon.svg" />
                                <span className="ms-1">hapus</span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="pt-2 me-5">
                        <img
                          src="../assets/berita/publish.svg"
                          className=""
                        ></img>
                      </div>
                    </td>
                    <td className="text-1 fw-normal py-3">AH Baharuddin</td>
                    <td className="text-1 fw-slug text-end p-3">
                      Okt 05, 2023
                    </td>
                  </tr>

                  <tr>
                    <th colspan="3" className="text-1 fw-normal ps-3 pt-3">
                      Page 1 of 1
                    </th>
                    <td className="text-end p-3 d-flex pe-3 justify-content-end">
                      <Button variant="outline-secondary fw-medium" size="sm">
                        Previous
                      </Button>{" "}
                      <Button
                        variant="outline-secondary ms-2 fw-medium"
                        size="sm"
                      >
                        Next
                      </Button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
