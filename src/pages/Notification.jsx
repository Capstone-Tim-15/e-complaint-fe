import { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import FaqButton from "../components/FaqButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import axios from "axios";

function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const fetchNotificationData = async () => {
      try {
        const response = await axios.get(
          "https://api.govcomplain.my.id/admin/complaint",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNotificationData(response.data.results);
      } catch (error) {
        console.error("Error fetching notification data:", error);
      }
    };

    fetchNotificationData();
  }, [token, navigate]);

  const handleShowModal = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
            <div className="mt-4 ms-4 p-4">
              {notificationData !== null && (
                <h3 className="mb-4 fw-bold">
                  Notification{" "}
                  <span className="text-danger">{notificationData.length}</span>
                </h3>
              )}
              {notificationData &&
                notificationData.map((data, i) => (
                  <div
                    key={i}
                    style={{ maxWidth: "1000px" }}
                    className="mb-3 p-3 bg-danger bg-opacity-10 rounded"
                  >
                    <p>
                      <strong>{data.name}</strong> memposting keluhan terbaru
                      <span className="text-danger"> {data.content}</span>{" "}
                      <span>on category </span>
                      <strong>{data.category}</strong>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span className="fs-6 text-sm-start">{data.date}</span>
                      <span className="fs-6 text-sm-start text-primary">
                        <button
                          className="btn btn-light"
                          onClick={() => handleShowModal(data)}
                        >
                          Detail
                        </button>
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Row>
      {/* Modal box */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedComplaint && (
            <>
              <p>
                <strong>{selectedComplaint.name}</strong> posted the following
                complaint:
              </p>
              <p>
                <strong>Title:</strong> {selectedComplaint.title}
              </p>
              <p>
                <strong>Category:</strong> {selectedComplaint.category}
              </p>
              <p>
                <strong>Date:</strong> {selectedComplaint.date}
              </p>
              <p>
                <strong>Status:</strong> {selectedComplaint.status}
              </p>
              <p>
                <strong>Content:</strong> {selectedComplaint.content}
              </p>
              <p>
                <strong>Image:</strong>{" "}
                <img src={selectedComplaint.imageUrl} alt="Complaint Image" />
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <FaqButton />
    </>
  );
}

export default Notification;
