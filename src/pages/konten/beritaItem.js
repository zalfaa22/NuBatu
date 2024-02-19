import React from "react";
import { useNavigate } from "react-router-dom";
import { getListOfBerita, deleteBeritaa } from "../../services/localstorage_Berita";

export default function BeritaItem({berita, setBerita}) {
    const {id, judul, foto, tanggal, jurnalis, isi, status} = berita;
    const navigate = useNavigate();

    const removeBeritaa = () => {
        deleteBeritaa(id);
        setBerita(getListOfBerita());
    }

  return (
    <tr>
      <th scope="row" className=" d-flex p-3 align-items-center">
        <img
          src={foto}
          className="pe-3"
          style={{ width: "100px" }}
        ></img>
        <div className="d-block ">
          <span className="title fw-semibold pt-5">{judul}</span>
          <div className="title fw-lighter d-flex  pt-1">
            {/* <a href="/editberita"> */}
              <button className="edit-btn" onClick={() => navigate(`/editBerita/${id}`)}>
                <img src="../assets/berita/edit-icon.svg" />
                <span className="ms-1">edit</span>
              </button>
            {/* </a> */}
            <div className="ms-4">
              {/* <a href="#"> */}
                <button className="del-btn" onClick={() => removeBeritaa()}>
                  <img src="../assets/berita/trash-icon.svg" />
                  <span className="ms-1">hapus</span>
                </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </th>
      <td>
        <div className="pt-2 me-5">
        {status === "Published" ? (
            <img src="../assets/berita/publish.svg" alt="" />
          ) : (
            <img src="../assets/berita/draft.svg" alt="" />
          )}
        </div>
      </td>
      <td className="text-1 fw-normal py-3">{jurnalis}</td>
      <td className="text-1 fw-slug text-end py-3">{tanggal}</td>
    </tr>
  );
}
