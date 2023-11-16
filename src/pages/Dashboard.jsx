import React from "react";
import { BarChart, PieChart } from "@mui/x-charts";
import {Card, Col, Row } from "react-bootstrap";
import { dataset } from "../components/Dashboard/DummyBarChart";

import Progress from "../components/Dashboard/Progress";

import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";

function Dashboard() {
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
              <Col xs={12} md={7} style={{ padding: "16px" }}>
                <Card className="w-fit p-2 rounded-lg">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-medium fs-4">Keluhan Masuk</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </Card.Body>
                  <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: "band", dataKey: "month" }]}
                    series={[{ dataKey: "keluhan", color: "red" }]}
                    width={500}
                    height={250}
                    style={{ borderRadius: "10px", margin: "10px" }}
                    margin={{ top: 20, right: 0, bottom: 30, left: 30 }}
                  />
                </Card>
              </Col>
              <Col xs={12} md={5} style={{ padding: "16px" }}>

              </Col>
            </Row>
            <Row className="gx-1">
              <Col xs={12} md={5} style={{ padding: "16px" }}>
                <Card className="w-100 p-2 rounded-lg">
                  <Card.Body>
                    <h4 className="text-xl font-weight-bold my-2 mb-5">
                      Aktivitas Terkini
                    </h4>
                    <Progress />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={7} style={{ padding: "16px" }}></Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Dashboard;
