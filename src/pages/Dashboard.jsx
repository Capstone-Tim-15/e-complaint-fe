import React from "react";
import Form from "react-bootstrap/Form";

export default function Dashboard() {
  return (
    <Form>
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Container>
    </Form>
  );
}
