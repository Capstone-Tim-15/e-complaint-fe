import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import image1 from "../assets/lp-1.png";
import image2 from "../assets/lp-2.png";
import image3 from "../assets/lp-3.png";
import image4 from "../assets/lp-4.png";
import image5 from "../assets/lp-5.png";
import GuideList from "../components/guide/GuideList";
import Layout from "../components/Layout/Layout";
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
                    <Link to="/layout">
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
                <spam className="subtitle">Kenyamanan Modern</spam>
                <div className="d-flex justify-content-between ">
                  <GuideList></GuideList>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </section>

      <section className="section__4">
        <Container>
          <div className="sub__section-4">
            <Col
              lg="9"
              className="cap__col d-flex justify-content-center align-items-center"
            >
              <div className="title__section-4">
                <p>Our Capabilities</p>
                <h1>Make yourself heard,</h1>
                {""}
                <h1>voice your complaints</h1>
                <span className="subtitle">
                  mari kita bersama-sama menyuarakan{" "}
                </span>
                <br />
                <span className="subtitle">
                  keluhan dan aspirasi kita untuk menciptakan{" "}
                </span>
                <br />
                <span className="subtitle">perubahan yang lebih baik</span>
                <div className="subtitle__section-4 d-flex gap-5 mt-5">
                  <div>
                    <div className="cap__title">575</div>
                    <div className="cap__subtitle">Total User</div>
                  </div>
                  <div>
                    <div className="cap__title">1.500</div>
                    <div className="cap__subtitle">Total Complaint</div>
                  </div>
                  <div>
                    <div className="cap__title">2.000</div>
                    <div className="cap__subtitle">Resolved Complaint </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <img className="lp__4" src={image4} alt="" />
            </Col>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
