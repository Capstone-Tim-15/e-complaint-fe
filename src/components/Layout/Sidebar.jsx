import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Icon } from "@iconify/react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setShowModal(false);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="sidebar all-sidebar d-none d-sm-flex flex-column justify-content-start align-items-center text-white">
      <div className="text-center">
        <ul className="nav flex-column p-0 m-0">
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/dashboard" ? "active-link" : ""}`}>
              <Link to="/dashboard" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-grid me-2 fs-5"></i>
                <span className="fs-5">Dashboard</span>
              </Link>
            </div>
          </li>
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/complaint" ? "active-link" : ""}`}>
              <Link to="/complaint" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Complaint</span>
              </Link>
            </div>
          </li>
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/berita" ? "active-link" : ""}`}>
              <Link to="/berita" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-newspaper me-2 fs-5"></i>
                <span className="fs-5">Berita</span>
              </Link>
            </div>
          </li>
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/kategori" ? "active-link" : ""}`}>
              <Link to="/kategori" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <Icon icon="tabler:list-search" width="26" height="26" style={{ marginRight: "3px", marginLeft: "0" }} />
                <span className="fs-5">Kategori</span>
              </Link>
            </div>
          </li>
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/chat" ? "active-link" : ""}`}>
              <Link to="/chat" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-chat-dots me-2 fs-5"></i>
                <span className="fs-5">Chat</span>
              </Link>
            </div>
          </li>
          <li className="nav-item mt-5">
            <div className={`${location.pathname === "/import" ? "active-link" : ""}`}>
              <Link to="/import" className="nav-link text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-file-earmark-arrow-up me-2 fs-5"></i>
                <span className="fs-5">Import</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="text-center button-side mt-5">
        <Button onClick={openModal} variant="primary" className="d-flex align-items-center" style={{ backgroundColor: "#6A83C6", borderColor: "#797777", padding: "12px" }}>
          <HiOutlineLogout className="me-2 fs-5" />
          LOG OUT
        </Button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sidebar;
