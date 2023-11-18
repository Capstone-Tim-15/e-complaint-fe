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
            <button>
              <span>kata sandi?</span>
            </button>
          </p>
        </div>
        <img className="vector" src={Vector} alt="" />
      </div>

      {/* <svg
        className="vector"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="0.1"
          d="M0,192L34.3,170.7C68.6,149,137,107,206,117.3C274.3,128,343,192,411,181.3C480,171,549,85,617,85.3C685.7,85,754,171,823,181.3C891.4,192,960,128,1029,101.3C1097.1,75,1166,85,1234,96C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      <Footer />
    </>
  );
}
