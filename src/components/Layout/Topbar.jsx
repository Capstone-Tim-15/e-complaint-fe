import React from "react";
import {HiOutlineBell } from "react-icons/hi";
import Navbar from "react-bootstrap/Navbar";
import "./Topbar.css";

function Topbar() {
  return (
    <Navbar expand="lg" className="topbar-all">
      <Navbar.Brand className="judul-top">Gov-Complain</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-image">
              <span className="profile-image ms-3">
                <img src="notification.svg" alt="Profile" />
              </span>
            </span>
            <span className="notif-name">Notification</span>
          </div>
        </div>
        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-image">
              <img src="profile.svg" alt="Profile" />
            </span>
            <span className="profile-name">Admin</span>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
