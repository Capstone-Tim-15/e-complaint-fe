import React from "react";
import image4 from "../../assets/lp-4.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Capabilites() {
  return (
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
  );
}
