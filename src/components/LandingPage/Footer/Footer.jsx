import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Footer.css";

const quick__links = [
  {
    path: "/faq",
    display: "FAQ",
  },
  {
    path: "/hiw",
    display: "How it Works",
  },
  {
    path: "/features",
    display: "Features",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quick__links2 = [
  {
    path: "/facebook",
    display: "Facebook",
  },
  {
    path: "/instagram",
    display: "Instagram",
  },
  {
    path: "/youtube",
    display: "Youtube",
  },
  {
    path: "/twitter",
    display: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Layanan kami terjamin aman</p>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Support</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroup.Item as="li" key={index} className="ps-0 border-0">
                  <Link as="a" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroup.Item as="li" key={index} className="ps-0 border-0">
                  <Link as="a" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Get in Touch</h5>
            <ListGroup className="footer__quick-links">
              <ListGroup.Item
                as="li"
                className="ps-0 border-0 d-flex align-item-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">(+)621 3456 789</p>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="ps-0 border-0 d-flex align-item-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address :
                </h6>
                <p className="mb-0">Jl. NU tenggara, Batam</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
