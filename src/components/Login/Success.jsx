import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import image8 from "../../assets/lp-8.png";
import Vector from "../../assets/vector.png";
import Ellipse from "../../assets/ellipse.png";
import "../../styles/success.css";

export default function Success() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title">Gov - Complaint</div>
          <div className="sub__title mb-2">
            Kata sandi baru telah diperbaharui!
          </div>
          <img className="image1 mb-4" src={image8} alt="" />
          <Button
            className="login__button mt-2"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
        <img className="vector4" src={Vector} alt="" />
      </div>
      <Footer />
    </>
  );
}
