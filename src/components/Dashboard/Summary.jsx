import { useEffect, useState } from "react";
import { SparkLineChart } from "@mui/x-charts";
import { FaArrowUp } from "react-icons/fa6";
import { Card, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

function Summary() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalComplaints, setTotalComplaints] = useState(0);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(
          "https://api.govcomplain.my.id/admin",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTotalUsers(response.data.meta.total);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    const fetchTotalComplaints = async () => {
      try {
        const response = await axios.get(
          "https://api.govcomplain.my.id/admin/complaint",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTotalComplaints(response.data.meta.total);
      } catch (error) {
        console.error("Error fetching total complaints:", error);
      }
    };

    fetchTotalUsers();
    fetchTotalComplaints();
  }, [token, navigate]);

  return (
    <>
      <Col xs={12} md={4} style={{ padding: "16px" }}>
        <Card className="w-100 card-db">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <h6 className="text-danger font-weight-bold mb-0">Total Users</h6>
              <h4 className="text-danger fw-bold mb-0">{totalUsers}</h4>
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
            <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={60} />
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
              <h4 className="text-danger fw-bold mb-0">{totalComplaints}</h4>
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
    </>
  );
}

export default Summary;
