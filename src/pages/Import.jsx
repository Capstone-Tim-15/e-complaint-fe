import React, { useEffect } from "react";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import { Col, Row } from "react-bootstrap";
import ExportComponent from "../components/Import/index";
import { useNavigate } from "react-router-dom";

export default function Import() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <Row as="row">
      <Col lg="12">
        <Topbar />
      </Col>
      <Row as="row">
        <Col lg="2">
          <Sidebar />
        </Col>
        <Col lg="10">
          <ExportComponent />
        </Col>
      </Row>
    </Row>
  );
}
