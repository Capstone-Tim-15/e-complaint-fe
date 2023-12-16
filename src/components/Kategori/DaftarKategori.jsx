import { useState, useEffect } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gambar from "../../assets/delete-Icon.png";
import "../Modal/css/delete.css";
import "./kategori.css";

export default function DaftarKategori() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedCategory, setEditedCategory] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

  const [editID, setEditID] = useState();

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name } = formData;

  useEffect(() => {
    getCategory();
  }, [refresh]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://api.govcomplain.my.id/admin/category",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories(response.data.results);
    } catch (error) {
      console.error("Error fetching news: ", error);
      setError("Error fetching news. Please check your JWT token.");
    }
  };

  const handleTambahKategori = () => {
    // Navigasi ke halaman tambah kategori
    navigate("/tambahkategori");
  };

  const handleUpdate = () => {
    if (name) {
      axios
        .put(
          `https://api.govcomplain.my.id/admin/category/${editID}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setFormData({ name: "" });
          setRefresh(refresh + 1);
          setShowEditModal(false);
          toast.success("Berhasil Mengupdate Data");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEdit = (editIDNotState) => {
    axios
      .get(`https://api.govcomplain.my.id/admin/category/${editIDNotState}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteModal = () => {
    // Batal penghapusan kategori (menutup modal)
    setSelectedCategory(null);
    setShowModal(false);
  };

  const closeEditModal = () => {
    // Batal pengeditan kategori (menutup modal)
    setEditedCategory("");
    setSelectedCategory(null);
    setShowEditModal(false);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Row>
        <Col lg="6">
          <h1 className="text-danger ms-4 mt-4"> Daftar Kategori </h1>
        </Col>
        <Col lg="6" className="d-flex flex-row-reverse" id="btn-tambah">
          {/* Tombol navigasi ke halaman tambah kategori */}
          <button className="Add" onClick={handleTambahKategori}>
            Tambah Kategori
          </button>
        </Col>
      </Row>

      <table id="table__kategori">
        <thead className="thead">
          <tr className="tr__table-kategori">
            <th className="th__table-kategori" scope="col">
              Kategori
            </th>
            <th scope="col" className="text-end pe-5 th__table-kategori">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr className="tr__table-kategori" key={category.id}>
              {/* Menampilkan nama kategori */}
              <td className="td__table-kategori">{category.CategoryName}</td>
              <td className="button me-1 td__table-kategori">
                <div className="d-flex justify-content-end me-5">
                  {/* Tombol edit kategori */}
                  <button
                    id="btn"
                    onClick={() => {
                      handleEdit(category.id);
                      setEditID(category.id);
                      setShowEditModal(category);
                    }}
                  >
                    <Icon icon="uil:edit" width="33" height="33" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Edit */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            {/* edit nama kategori */}
            <Form.Control
              controlId="name"
              type="text"
              id="name"
              name="name"
              value={name}
              autoComplete="off"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Batal
          </Button>
          <Button
            variant="danger"
            type="submit"
            onClick={() => {
              handleUpdate();
            }}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
