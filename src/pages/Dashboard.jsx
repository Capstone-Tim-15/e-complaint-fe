import React, { useState } from "react";
import BarChart from "../components/Dashboard/BarChart";
import { UserData } from "../components/Dashboard/DummyBarChart";

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
    </>
  );
}

export default Dashboard;
