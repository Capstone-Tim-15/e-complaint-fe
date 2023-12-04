import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import Vector from "../../assets/vector.png";
import Ellipse from "../../assets/ellipse.png";
import "../../styles/recovery-password.css";

export default function RecoveryPassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title__login">Gov - Complaint</div>
          <div className="sub__title mb-4">Recovery Password</div>
          <Form.Control
            className="email__input mb-4"
            type="email"
            placeholder="Email"
          />

          <Button className="login__button mb-4" onClick={handleShow}>
            Selanjutnya
          </Button>
        </div>
      </div>
      <Footer />

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="modal__header" closeButton>
          <p className="modal__title">Reset password</p>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <p className="modal__body-desc">
            Kami telah mengirimkan kode verifikasi melalui email yang anda
            masukkan
          </p>
          <Form.Control
            className="email__input-recovery mt-3"
            type="email"
            placeholder="Kode Verifikasi"
          />
          <button className="modal_kode">
            <span>Tidak menerima kode?</span>
          </button>
        </Modal.Body>
        <Modal.Footer className="modal__footer">
          <Button
            className="button__confirm"
            onClick={() => navigate("/newpassword")}
          >
            Selanjutnya
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
