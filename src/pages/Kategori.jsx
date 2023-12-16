import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useAuth } from "../contexts/authContext";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import DaftarKategori from "../components/Kategori/DaftarKategori";

export default function Kategori() {
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
            <DaftarKategori />
          </Col>
        </Row>
      </Row>
    </>
  );
}
