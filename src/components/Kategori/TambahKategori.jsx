import { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";

const TambahKategori = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successCategoryName, setSuccessCategoryName] = useState("");
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://api.govcomplain.my.id/admin/category",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccessCategoryName(formData.Name);

      // Reset dan menampilkan modal
      setCategoryName("");
      setShowModal(true);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const CloseModal = () => {
    setShowModal(false);

    // redirect ke kategori setelah menutup modal
    navigate("/kategori");
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
            <Row>
              <Col lg="6">
                <h1 className="text-danger ms-4 mt-4">
                  {" "}
                  <button
                    className="daftar__berita"
                    onClick={() => navigate("/kategori")}
                  >
                    Daftar Kategori
                  </button>{" "}
                  &gt; <span className="fw-bold">Tambah Kategori</span>{" "}
                </h1>
              </Col>
            </Row>
            <Col lg="6">
              <div className="p-4">
                <form className="p-4 form__berita" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="categoryName"
                      className="form-label text-danger"
                    >
                      Kategori
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      name="Name"
                      onChange={handleInputChange}
                      value={formData.Name}
                    />
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Save
                  </button>
                </form>
              </div>
            </Col>
          </Col>
        </Row>
      </Row>

      {/* Sukses Modal */}
      <Modal show={showModal} onHide={CloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sukses!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Berhasil Menambahkan Kategori <strong>{successCategoryName}</strong>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseModal}>
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TambahKategori;
