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

  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setconfirmNewPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put("https://api.govcomplain.my.id/admin/reset-password", {
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })

      .catch((err) => {
        if (!err) {
          setShow(false);
          toast.error("No Server Response");
        } else if (email === "") {
          setShow(false);
          toast.error("Missing Email");
        } else if (err.status === 401) {
          setShow(false);
          toast.error("Unauthorized");
        } else {
          toast.error("Email Is Not Valid");
        }
      });
  };
  return (
    <>
      <Header />
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title__login">Gov - Complaint</div>
          <div className="sub__title mb-4">New Password</div>
          <form action="" className="d-flex flex-column align-items-center">
            <InputGroup className="input__group-pass mb-3">
              <Form.Control
                className="email__input"
                id="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi Baru"
                autoComplete="off"
                onChange={(e) => setNewPass(e.target.value)}
                value={newPass}
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
            <InputGroup className="input__group-pass mb-3">
              <Form.Control
                className="password__input"
                id="confirmNewPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Verifikasi Kata Sandi baru"
                autoComplete="off"
                onChange={(e) => setconfirmNewPass(e.target.value)}
                value={confirmNewPass}
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
            <Button
              className="login__button mt-2"
              onClick={() => navigate("/success")}
            >
              Selanjutnya
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
