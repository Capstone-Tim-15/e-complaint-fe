import { Col, Row } from "react-bootstrap";
import Topbar from "../Layout/Topbar";
import Sidebar from "../Layout/Sidebar";
import styled from "styled-components";

const StyledFaq = styled.div`
  .judul {
    font-weight: 700;
    font-size: 37px;
    color: #e02216;
    margin-top: 1rem;
  }
`;

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
            <StyledFaq>
              <h3 className="judul">FAQ</h3>
            </StyledFaq>
          </Col>
        </Row>
      </Row>
    </>
  );
}
