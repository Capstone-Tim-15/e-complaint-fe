import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Routers from "../../router/Routers";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout() {
  return (
    <Container fluid>
      <Row as="row">
        <Col lg="12">
          <Topbar />
        </Col>
        <Row as="row">
          <Col lg="2">
            <Sidebar />
          </Col>
          <Col lg="10">
            <Routers />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
