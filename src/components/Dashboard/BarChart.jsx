import React from 'react'
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"


function BarChart({ chartData, options }) {

  return (
    <>
      <div>
        <div className="card shadow mt-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h3 className="m-0 font-weight-bold">Keluhan Masuk</h3>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <Bar data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BarChart