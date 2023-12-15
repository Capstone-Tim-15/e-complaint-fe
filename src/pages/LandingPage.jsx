import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import image1 from "../assets/lp-1.png";
import image2 from "../assets/lp-2.png";
import image3 from "../assets/lp-3.png";
import Blog from "../components/BlogPost/Blog";
import GuideList from "../components/guide/GuideList";
import Capabilites from "../components/Capabilities/Capabilites";
import "../styles/landing-page.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Header />
      <section className="section__one">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <img className="lp__2" src={image2} alt="" />
                <h1>Gov-Complaint</h1>
                <p className="subtitle">“Menuju Bandar Dunia Madani”</p>
                <div className="hero__button">
                  <Button className="btn secondary__btn ">
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <p className="hero__desc">
                    Akses berbagai layanan pengaduan dengan tanggap, cepat dan
                    tepat waktu
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img-box d-flex align-items-center justify-content-center">
                <img src={image1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section__2 d-flex justify-content-center align-items-center text-center">
        <Container>
          <Col lg="12">
            <span>Layanan Aspirasi dan Pengaduan Masyarakat</span>
          </Col>
        </Container>
      </section>

      <section>
        <Container>
          <div className="section__3">
            <Col lg="6">
              <div className="image__wrapper">
                <img className="lp__3" src={image3} alt="" />
              </div>
            </Col>
            <Col lg="9">
              <div className="title__section-3">
                <h1>Hello, Welcome to our guide</h1>
                <span className="subtitle">Berkunjung ke Dunia Fasilitas</span>
                <br />
                <span className="subtitle"> Terbaik Merasakan Keajaiban</span>
                <br />
                <span className="subtitle">Kenyamanan Modern</span>
                <div className="d-flex justify-content-between ">
                  <GuideList></GuideList>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </section>

      <section className="section__4">
        <Capabilites></Capabilites>
      </section>

      <section>
        <Blog></Blog>
      </section>
      <Footer />
    </>
  );
}
