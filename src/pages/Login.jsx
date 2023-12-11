import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ellipse from "../assets/ellipse.png";
import "../styles/login.css";
import axios from "axios";
import { useAuth } from "../contexts/authContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://34.128.69.15:8000/admin/login", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result);
        const tokenBarear = result.data.results.token;
        localStorage.setItem("token", tokenBarear);
        setToken(tokenBarear);
        console.log(tokenBarear);
        navigate("/dashboard");
      })

      .catch((err) => {
        console.log(err);
        if (!err) {
          toast.error("No Server Response");
        } else if ((username && password) === "") {
          toast.error("Missing Username or Password");
        } else if (err.status === 401) {
          toast.error("Unauthorized");
        } else {
          toast.error("Username or Password Incorrect!");
        }
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                />
                <InputGroup className="input__group-pass mb-3">
                  <Form.Control
                    className="password__input"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
