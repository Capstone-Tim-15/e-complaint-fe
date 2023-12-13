import React, { useEffect } from "react";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import { useAuth } from "../contexts/authContext";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ImportComponent from "../components/Import";

export default function Import() {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
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
          <ImportComponent />
        </Col>
      </Row>
    </Row>
  );
}
