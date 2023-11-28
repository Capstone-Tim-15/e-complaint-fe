import React from "react";
import FormBerita from "../components/TambahBerita/FormBerita";
import ListBerita from "../components/ListBerita/ListBerita";
import { Row, Col } from "react-bootstrap";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";

const ManageBerita = () => {
  return (
    <>
      <Row as="row">
        <Col lg="12">
          <Topbar />
        </Col>
        <Row as="row">
          <Col lg="2">
            <Sidebar />
          </Col>
          <Col lg="10">
            <ListBerita></ListBerita>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ManageBerita;
