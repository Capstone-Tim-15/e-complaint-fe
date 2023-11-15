import React, { useState } from "react";
import BarChart from "../components/Dashboard/BarChart";
import { UserData } from "../components/Dashboard/DummyBarChart";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";

function Dashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Complaint",
        data: UserData.map((data) => data.Complaint),
        backgroundColor: ["#E02216"],
        borderColor: "white",
        borderWidth: 1,
        barPercentage: 0.8,
        categoryPercentage: 0.7,
        borderRadius: 8,
      },
    ],
  });
  const chartOptions = {
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

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
            <div className="row">
              <div className="col-lg-7">
                <div>
                  <BarChart chartData={userData} options={chartOptions} />
                </div>
              </div>
              <div className="col-lg-3">
                <h1>world</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Dashboard;
