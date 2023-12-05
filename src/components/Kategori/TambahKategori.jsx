import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { useNavigate } from "react-router-dom";

const FormBerita = () => {
  const navigate = useNavigate();
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
                <form className="p-4 form__berita">
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
                      id="categoryName"
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
    </>
  );
};

export default FormBerita;
