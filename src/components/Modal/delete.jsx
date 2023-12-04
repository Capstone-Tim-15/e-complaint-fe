import { Icon } from "@iconify/react";
import styled from "styled-components";
import gambar from "../../assets/delete-Icon.png"
import { Modal, Button } from "react-bootstrap";
import './css/delete.css';

export default function Delete({ deleteModal }) {
  return (
    <div className="modalDelete">
      <div className="overlay" id="overlay"></div>
      <div className="card cardDelete">
        <div className="contain">
          <div className="icon-delete">
            <img src={gambar} alt="icon-delete" />
          </div>
          <div className="title">
            <h4>Apakah anda yakin <span className="title-2">ingin menghapus keluhan?</span></h4>
          </div>
          <div className="actions">
            <button className="cancel" onClick={deleteModal}>Tidak</button>
            <button className="save">Ya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
