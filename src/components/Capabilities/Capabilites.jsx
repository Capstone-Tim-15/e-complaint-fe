import React, { useEffect, useState } from "react";
import image4 from "../../assets/lp-4.png";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function Capabilites() {
  const [landingData, setLandingData] = useState([]);

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const response = await axios.get(
          "https://api.govcomplain.my.id/landing"
        );
        setLandingData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching landing data:", error);
      }
    };

    fetchLandingData();
  }, []);

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
                <div className="cap__title">
                  {landingData !== null && (
                    <p className="p-0 m-0">{landingData.total_user}</p>
                  )}
                </div>
                <div className="cap__subtitle">Total User</div>
              </div>
              <div>
                <div className="cap__title">
                  {landingData !== null && (
                    <p className="p-0 m-0">{landingData.total_complaint}</p>
                  )}
                </div>
                <div className="cap__subtitle">Total Complaint</div>
              </div>
              <div>
                <div className="cap__title">
                  {landingData !== null && (
                    <p className="p-0 m-0">{landingData.total_resolved}</p>
                  )}
                </div>
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
