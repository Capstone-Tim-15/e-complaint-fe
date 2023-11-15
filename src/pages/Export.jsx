import React from "react";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import { Col, Row } from "react-bootstrap";

export default function Export() {
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
          <div>ini Export</div>
        </Col>
      </Row>
    </Row>
  );
}
