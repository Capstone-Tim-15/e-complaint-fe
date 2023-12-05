import { Col, Row } from "react-bootstrap";
import Topbar from "../Layout/Topbar";
import Sidebar from "../Layout/Sidebar";

export default function FaqList() {
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
            <h3>FAQ</h3>
          </Col>
        </Row>
      </Row>
    </>
  );
}
