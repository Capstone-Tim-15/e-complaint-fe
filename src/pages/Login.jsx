import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import Vector from "../assets/vector.png";
import Ellipse from "../assets/ellipse.png";
import "../styles/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title">Gov - Complaint</div>
          <div className="sub__title mb-4">Admin Panel Login</div>
          <Form.Control
            className="email__input mb-4"
            type="email"
            placeholder="Email"
          />
          <InputGroup className="input__group-pass mb-3">
            <Form.Control
              className="password__input"
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
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
            className="login__button mb-4"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </Button>
          <p>
            Lupa{" "}
            <button onClick={() => navigate("/recovery")}>
              <span>kata sandi?</span>
            </button>
          </p>
        </div>
        <img className="vector" src={Vector} alt="" />
      </div>
      <Footer />
    </>
  );
}
