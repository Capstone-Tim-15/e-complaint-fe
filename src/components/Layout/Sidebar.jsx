import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar all-sidebar d-flex flex-column justify-content-center align-items-center text-white vh-100">
      <div className="text-center">
        <hr className="text-secondary" />
        <ul className="nav flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link
              to="/dashboard"
              className="nav-link text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-grid me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link
              to="/complaint"
              className="nav-link text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-people me-2 fs-5"></i>
              <span className="fs-5">Complaint</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link
              to="/berita"
              className="nav-link text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-newspaper me-2 fs-5"></i>
              <span className="fs-5">Berita</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link
              to="/chat"
              className="nav-link text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-chat-dots me-2 fs-5"></i>
              <span className="fs-5">Chat</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link
              to="/export"
              className="nav-link text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-file-earmark-arrow-up me-2 fs-5"></i>
              <span className="fs-5">Export</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center mt-auto">
        <hr className="text-secondary" />
        <Button variant="primary" className="d-flex align-items-center">
          <HiOutlineLogout className="me-2 fs-5" />
          LOG OUT
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
