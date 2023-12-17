import { Icon } from "@iconify/react";
import styled from "styled-components";
import gambar from "../../assets/delete-Icon.png";
import { Modal, Button } from "react-bootstrap";
import "./css/delete.css";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";

export default function Delete({
  deleteModal,
  selectedIdForDelete,
  onDeleteSuccess,
}) {
  let [data, setData] = useState([]);
  const { token } = useAuth();
  const itemId = selectedIdForDelete.id;

  const handleDelete = async () => {
    // console.log(`delete id: ${selectedIdForDelete.id}`);
    try {
      const response = await axios.delete(
        `https://api.govcomplain.my.id/admin/complaint?complaint_id=${itemId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        console.log(`delete id: ${itemId} berhasil`);
        window.location.reload();
      }
      onDeleteSuccess(itemId);
    } catch (error) {
      console.error(`Error`, error);
    }
    deleteModal();
  };

  return (
    <div className="modalDelete">
      <div className="overlay" id="overlay"></div>
      <div className="card cardDelete">
        <div className="contain">
          <div className="icon-delete">
            <img src={gambar} alt="icon-delete" />
          </div>
          <div className="title">
            <h4>
              Apakah anda yakin{" "}
              <span className="title-2">ingin menghapus keluhan?</span>
            </h4>
          </div>
          <div className="actions">
            <button className="cancel" onClick={deleteModal}>
              Tidak
            </button>
            <button className="save" onClick={handleDelete}>
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
