import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, getListOfEmployees } from '../services/localstorage';

export const CampaignItem = ({ employee, setEmployees }) => {
    const navigate = useNavigate();

    if (!employee) {
        return null;
    }

    const { id, nama, status, inisiator, dana, gambar } = employee;

    const removeEmployee = () => {
        deleteEmployee(id);
        setEmployees(getListOfEmployees());
    }
  
    return (
        <tr>
        <th scope="row" className=" d-flex p-3 align-items-center">
          <img src={gambar} className="pe-3"></img>
          <div className="d-block ">
            <span className="title fw-semibold pt-5">
              {nama}
            </span>
            <div className="title fw-lighter d-flex  pt-1">
              <a href="#">
                <button className="edit-btn" onClick={() => navigate(`/edit-employee/${id}`)}>
                  <img src="../assets/edit.svg" />
                  <span className="ms-1">edit</span>
                </button>
              </a>
              <div className="ms-4">
                <a href="#">
                  <button className="del-btn" onClick={removeEmployee}>
                    <img src="../assets/delete.svg" />
                    <span className="ms-1">hapus</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </th>
        <td>
          <div className="pt-2 me-5">
            <img src={`../assets/${status}.svg`} className=""></img>
            {/* Disetujui */}
          </div>
        </td>
        <td className="text-1 fw-normal py-3">{inisiator}</td>
        <td className="text-1 fw-slug text-end py-3">
          {dana}
        </td>
      </tr>
    );
};
