import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import Vector from "../assets/vector.png";
import Ellipse from "../assets/ellipse.png";
import "../styles/login.css";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://34.128.69.15:8000/admin/login", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.data.results.token);
        navigate("/dashboard");
      })

      .catch((err) => {
        console.log(err);
        if (!err) {
          setErrMsg("No Server Response");
        } else if (err.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      });
  };

  return (
    <>
      {success ? (
        navigate("/dashboard")
      ) : (
        <section className="login__page">
          <Header />
          <div className="background">
            <img className="ellipse" src={Ellipse} alt="" />
            <div className="content">
              <div className="title__login">Gov - Complaint</div>
              <div className="sub__title mb-4">Admin Panel Login</div>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column align-item-center"
              >
                <Form.Control
                  className="email__input mb-4"
                  type="text"
                  id="username"
                  placeholder="Username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
                <InputGroup className="input__group-pass mb-3">
                  <Form.Control
                    className="password__input"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <Button
                    as="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Icon icon="mdi:eye-off" />
                    ) : (
                      <Icon icon="mdi:eye" />
                    )}
                  </Button>
                </InputGroup>
                <Button type="submit" className="login__button mb-4">
                  Login
                </Button>
              </form>
              <p>
                Lupa{" "}
                <button onClick={() => navigate("/recovery")}>
                  <span>kata sandi?</span>
                </button>
              </p>
            </div>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
}
