import { useState, useEffect } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import gambar from "../../assets/delete-Icon.png";
import "../Modal/css/delete.css";
import "./kategori.css";

export default function DaftarKategori() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedCategory, setEditedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mengambil data kategori
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "https://6570537e09586eff66412148.mockapi.io/kategori"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

  const handleTambahKategori = () => {
    // Navigasi ke halaman tambah kategori
    navigate("/tambahkategori");
  };

  const handleDelete = async () => {
    try {
      // Menghapus kategori dari API
      await axios.delete(
        `https://6570537e09586eff66412148.mockapi.io/kategori/${selectedCategory.id}`
      );

      // Mengupdate state untuk merefresh tampilan
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== selectedCategory.id)
      );

      // Menutup modal
      setSelectedCategory(null);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEdit = async () => {
    try {
      // Mengupdate kategori ke API
      await axios.put(
        `https://6570537e09586eff66412148.mockapi.io/kategori/${selectedCategory.id}`,
        { kategori: editedCategory }
      );

      // Mengupdate state untuk merefresh tampilan
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === selectedCategory.id
            ? { ...category, kategori: editedCategory }
            : category
        )
      );

      // Menutup modal
      setSelectedCategory(null);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating category:", error);
    }
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
              <td className="td__table-kategori">{category.kategori}</td>
              <td className="button me-1 td__table-kategori">
                <div className="d-flex justify-content-end me-5">
                  {/* Tombol edit kategori */}
                  <button
                    id="btn"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowEditModal(true);
                    }}
                  >
                    <Icon
                      icon="uil:edit"
                      width="33"
                      height="33"
                      style={{ marginRight: "1.5rem" }}
                    />
                  </button>
                  {/* Tombol hapus kategori */}
                  <button
                    id="btn"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowModal(true);
                    }}
                  >
                    <Icon icon="mdi:trash-can-outline" width="33" height="33" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Delete */}
      {showModal && (
        <div className="modalDelete">
          <div className="overlay" id="overlay"></div>
          <div className="card cardDelete">
            <div className="contain">
              <div className="icon-delete">
                <img src={gambar} alt="icon-delete" />
              </div>
              <div className="title">
                <h4>
                  Apakah anda yakin{" "}
                  <span className="title-2">
                    ingin menghapus kategori {selectedCategory?.kategori}?
                  </span>
                </h4>
              </div>
              <div className="actions">
                <button className="cancel" onClick={deleteModal}>
                  Tidak
                </button>
                <button className="save" onClick={handleDelete}>
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="editedCategory">
            {/* edit nama kategori */}
            <Form.Control
              type="text"
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleEdit}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
