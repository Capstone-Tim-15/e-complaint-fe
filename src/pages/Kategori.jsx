import { Col, Row } from "react-bootstrap";
import Topbar from "../components/Layout/Topbar";
import Sidebar from "../components/Layout/Sidebar";
import DaftarKategori from "../components/Kategori/DaftarKategori";

export default function Kategori() {
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
