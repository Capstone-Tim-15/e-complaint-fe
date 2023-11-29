import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, SparkLineChart } from "@mui/x-charts";
import { FaArrowUp } from "react-icons/fa6";
import { Card, Col, Row } from "react-bootstrap";

import { data } from "../components/Dashboard/DummyPieChart";
import Progress from "../components/Dashboard/Progress";
import Table from "../components/Dashboard/Table";

import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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
              <Col xs={12} md={4} style={{ padding: "16px" }}>
                <Card className="w-100 card-db">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="text-danger font-weight-bold mb-0">
                        Total Users
                      </h6>
                      <h4 className="text-danger fw-bold mb-0">12.345</h4>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-muted small">
                        <span className="fs-7 fw-normal">
                          (<FaArrowUp /> 72%)
                        </span>{" "}
                        Since Yesterday
                      </span>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <SparkLineChart
                      data={[1, 4, 2, 5, 7, 2, 4, 6]}
                      height={60}
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} style={{ padding: "16px" }}>
                <Card className="w-100 card-db">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="text-danger font-weight-bold mb-0">
                        All Complaints
                      </h6>
                      <h4 className="text-danger fw-bold mb-0">34.672</h4>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-muted small">
                        <span className="fs-7 fw-normal">
                          (<FaArrowUp /> 12%)
                        </span>{" "}
                        Since Yesterday
                      </span>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <SparkLineChart data={[4, 5, 1, 8, 9]} height={60} />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} style={{ padding: "16px" }}>
                <Card className="w-100 card-db">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="text-danger font-weight-bold mb-0">
                        Resolved Complaints
                      </h6>
                      <h4 className="text-danger fw-bold mb-0">95.257</h4>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-muted small">
                        <span className="fs-7 fw-normal">
                          (<FaArrowUp /> 90%)
                        </span>{" "}
                        Since Yesterday
                      </span>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <SparkLineChart data={[65, 23, 843, 245, 1]} height={60} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="gx-1">
              <Col xs={12} md={5} style={{ padding: "16px" }}>
                <Card className="w-100 p-3 card-db">
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
                    <PieChart
                      height={200}
                      series={[data]}
                      colors={["red", "orange", "blue"]}
                    />
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
