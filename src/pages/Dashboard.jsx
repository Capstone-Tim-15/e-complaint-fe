import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Progress from "../components/Dashboard/Progress";
import Table from "../components/Dashboard/Table";
import { useAuth } from "../contexts/authContext";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import "../styles/Dashboard.css";
import Summary from "../components/Dashboard/Summary";
import ChartPie from "../components/Dashboard/PieChart"

function Dashboard() {
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
            <Row>
              <Summary />
            </Row>
            <Row className="gx-1">
              <Col xs={12} md={5} style={{ padding: "16px" }}>
                <Card className="w-100 p-5 card-db">
                  <Card.Body>
                    <h4 className="text-xl fw-bold my-2 mb-5">
                      Aktivitas Terkini
                    </h4>
                    <Progress />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={7} style={{ padding: "16px" }}>
                <Col className="mb-3">
                  <Card className="p-3 card-db">
                    <ChartPie />
                  </Card>
                </Col>
                <Col>
                  <Card className="w-100 p-3 card-db">
                    <Card.Body>
                      <h4 className="text-xl fw-bold mb-4">Tugas Penting</h4>
                      <Table />
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Dashboard;
