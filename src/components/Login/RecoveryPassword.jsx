import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuthRecovery } from "../../contexts/passwordAuth";
import { useAuth } from "../../contexts/authContext";
import "react-toastify/dist/ReactToastify.css";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import axios from "axios";
import Ellipse from "../../assets/ellipse.png";
import "../../styles/recovery-password.css";

export default function RecoveryPassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow();

  const navigate = useNavigate();
  const { setTokenRecovery } = useAuthRecovery();
  const { tokenRecovery } = useAuthRecovery();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    otp: "",
  });

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://api.govcomplain.my.id/otp/admin/send-otp", {
        email: email,
      })
      .then((result) => {
        console.log(result);
        const tokenBarearRecovery = result.data.results.token;
        localStorage.setItem("tokenRecovery", tokenBarearRecovery);
        setTokenRecovery(tokenBarearRecovery);
        setShow(true);
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

  const handleSubmitRecovery = async (e) => {
    e.preventDefault();

    await axios
      .post("https://api.govcomplain.my.id/otp/admin/check-otp", formData, {
        headers: {
          Authorization: `Bearer ${tokenRecovery}`,
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        navigate("/newpassword");
      })

      .catch((err) => {
        console.log(err);
        if (!err) {
          toast.error("No Server Response");
        } else if (formData.otp === "") {
          toast.error("Missing OTP");
        } else if (err.status === 401) {
          toast.error("Unauthorized");
        } else {
          toast.error("OTP Is Not Valid");
        }
      });
  };
  return (
    <>
      <Header />
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
      <form onSubmit={handleSubmit}>
        <div className="background">
          <img className="ellipse" src={Ellipse} alt="" />
          <div className="content">
            <div className="title__login">Gov - Complaint</div>
            <div className="sub__title mb-4">Recovery Password</div>
            <Form.Control
              className="email__input mb-4"
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Button
              className="login__button mb-4"
              type="submit"
              onClick={handleShow}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
        <Footer />
      </form>

      <Modal className="modal" show={show} onHide={handleClose}>
        <form action="" onSubmit={handleSubmitRecovery}>
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
              type="text"
              id="otp"
              name="otp"
              placeholder="Kode Verifikasi"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData.otp}
            />
            <button className="modal_kode">
              <span>Tidak menerima kode?</span>
            </button>
          </Modal.Body>
          <Modal.Footer className="modal__footer">
            <Button className="button__confirm" type="submit">
              Selanjutnya
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
