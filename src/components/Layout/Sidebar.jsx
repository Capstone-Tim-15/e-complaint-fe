import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-space-between bg-dark text-white p-4 vh-100">
      <div>
        <a href="d-flex align-items-center">
          <i className="bi bi-bootstrap fs-5"></i>
          <span className="fs-4">Gov-Complaint</span>
        </a>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-grid me-2 fs-5"></i>
              <Link to="/dashboard">
                <span className="fs-5">Dashboard</span>
              </Link>
            </a>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-people me-2 fs-5"></i>
              <Link to="/complaint">
                <span className="fs-5">Complaint</span>
              </Link>
            </a>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-newspaper me-2 fs-5"></i>
              <span className="fs-5">Berita</span>
            </a>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-chat-dots me-2 fs-5"></i>
              <span className="fs-5">Chat</span>
            </a>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-file-earmark-arrow-up me-2 fs-5"></i>
              <span className="fs-5">Export</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <hr className="text-secondary" />
        <h5>button logout</h5>
        <i className="bi bi-box-arrow-right me-2 fs-5"></i>
        <button className="btn btn-primary">LOG OUT</button>
      </div>
    </div>
  );
};

export default Sidebar;
