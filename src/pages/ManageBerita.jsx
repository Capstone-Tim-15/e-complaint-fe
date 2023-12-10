import React, { useEffect } from "react";
import FormBerita from "../components/TambahBerita/FormBerita";
import ListBerita from "../components/ListBerita/ListBerita";
import { Row, Col, Toast } from "react-bootstrap";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const ManageBerita = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
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
