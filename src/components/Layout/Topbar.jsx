import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Topbar.css";

function Topbar() {
  return (
    <Navbar expand="lg" className=" topbar-all">
      <Navbar.Brand className="judul-top">Gov-Complain</Navbar.Brand>
      <Navbar aria-controls="basic-navbar-nav" />
      <div id="basic-navbar-nav justify-content-end">
        
      </div>
    </Navbar>
  );
}

export default Topbar;
