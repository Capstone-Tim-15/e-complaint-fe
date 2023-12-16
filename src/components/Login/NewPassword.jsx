import { useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthRecovery } from "../../contexts/passwordAuth";
import { useAuth } from "../../contexts/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import { Icon } from "@iconify/react";
import Ellipse from "../../assets/ellipse.png";
import "../../styles/new-password.css";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();
  const { tokenRecovery } = useAuthRecovery();
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!tokenRecovery) {
      navigate("/recovery");
    } else if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put("https://api.govcomplain.my.id/admin/reset-password", formData, {
        headers: { Authorization: `Bearer ${tokenRecovery}` },
      })
      .then((result) => {
        console.log(result);
        localStorage.removeItem("tokenRecovery");
        navigate("/success");
      })

      .catch((err) => {
        if (!err) {
          toast.error("No Server Response");
        } else if (
          (formData.newPassword && formData.confirmNewPassword) === ""
        ) {
          toast.error("Missing Password");
        } else if (err.status === 401) {
          toast.error("Unauthorized");
        } else if (formData.newPassword !== formData.confirmNewPassword) {
          toast.error("Password Does Not Match");
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
      <div className="background">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="content">
          <div className="title__login">Gov - Complaint</div>
          <div className="sub__title mb-4">New Password</div>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center"
          >
            <InputGroup className="input__group-pass mb-3">
              <Form.Control
                className="email__input"
                id="newPassword"
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi Baru"
                autoComplete="off"
                onChange={handleInputChange}
                value={formData.newPassword}
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
                name="confirmNewPassword"
                type={showPassword2 ? "text" : "password"}
                placeholder="Verifikasi Kata Sandi baru"
                autoComplete="off"
                onChange={handleInputChange}
                value={formData.confirmNewPassword}
              />
              <Button
                as="button"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword ? (
                  <Icon icon="mdi:eye-off" />
                ) : (
                  <Icon icon="mdi:eye" />
                )}
              </Button>
            </InputGroup>
            <Button className="login__button mt-2" type="submit">
              Selanjutnya
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
