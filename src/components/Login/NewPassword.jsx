import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import Vector from "../../assets/vector.png";
import Ellipse from "../../assets/ellipse.png";
import "../../styles/new-password.css";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title__login">Gov - Complaint</div>
          <div className="sub__title mb-4">New Password</div>
          <Form.Control
            className="email__input mb-4"
            type="email"
            placeholder="Kata Sandi Baru"
          />
          <InputGroup className="input__group-pass mb-3">
            <Form.Control
              className="password__input"
              type={showPassword ? "text" : "password"}
              placeholder="Verifikasi Kata Sandi baru"
            />
            <Button as="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon icon="mdi:eye-off" />
              ) : (
                <Icon icon="mdi:eye" />
              )}
            </Button>
          </InputGroup>
          <Button
            className="login__button mt-2"
            onClick={() => navigate("/success")}
          >
            Selanjutnya
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
