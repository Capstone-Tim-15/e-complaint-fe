import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import { Link } from "react-router-dom";
import image1 from "../assets/lp-1.png";
import image2 from "../assets/lp-2.png";
import "../styles/landing-page.css";

export default function LandingPage() {
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
                    <Link to="/register">
                      <span>Daftar</span>
                    </Link>
                  </Button>
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
      <Footer />
    </>
  );
}
