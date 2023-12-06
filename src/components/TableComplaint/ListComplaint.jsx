/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import iconDetail from '../../assets/detail-icon.png'
export default function ListComplaint(props) {
  const { komplain, onEditModal, updateComplaint, deleteModal, detailModal } = props;
  const navigate = useNavigate();
  return (
    <>
      <tr className="header-row" key={komplain.id}>
        <td>
          <div className="d-flex">
            <div className="align-self-center">
              <img src={komplain.profil} className="rounded-circle" width={`80px`}></img>
            </div>
            <p className="ms-1 fw-bold align-self-center">{komplain.name}</p>
          </div>
        </td>
        <td id="desk">
          <div className="d-flex">
            <div className="me-2 d-flex align-items-center">
              <img src={komplain.imageDesc} width={`100px`} className="mt-2 "></img>
            </div>
            <div className="d-flex align-items-center">{komplain.description}</div>
          </div>
        </td>
        <td>{komplain.category}</td>
        <td>{komplain.date}</td>
        <td id="state">
          <div className={`text-center p-1 px-2 me-3 text-white rounded-5 self-center`} style={{ backgroundColor: komplain.state === "Proses" ? "#FFC700" : "#0EAE00" }}>
            {komplain.state}
          </div>
        </td>
        <td>
          <button onClick={() => navigate("/detail-complaint")}>
            <img src={iconDetail} width="35" height="35" style={{ marginRight: "1.5rem" }} />
          </button>
          <button onClick={() => onEditModal(komplain.id, updateComplaint)}>
            <Icon icon="uil:edit" width="35" height="35" style={{ marginRight: "1.5rem" }} />
          </button>
          <button onClick={() => deleteModal(komplain.id)}>
            <Icon icon="mdi:trash-can-outline" width="35" height="35" />
          </button>
        </td>
      </tr>
    </>
  );
}
