import React from "react";
import { Icon } from "@iconify/react";
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
            <span className="profile-image ms-3">
              <button>
                <Icon icon="ion:notifications-outline" width="35" height="35" />
              </button>
            </span>
            <span className="notif-name">Notification</span>
          </div>
        </div>
        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-image">
              <button>
                <img src="profile.svg" alt="Profile" />
              </button>
            </span>
            <span className="profile-name">Admin</span>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
