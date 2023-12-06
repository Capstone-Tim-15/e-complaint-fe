import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import gambar from "../../assets/delete-Icon.png";
import '../Modal/css/delete.css'

export default function DaftarKategori() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
    navigate("/tambahkategori");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://6570537e09586eff66412148.mockapi.io/kategori/${selectedCategory.id}`
      );

      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== selectedCategory.id)
      );

      setSelectedCategory(null);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const deleteModal = () => {
    // tutup modal (no delete)
    setSelectedCategory(null);
    setShowModal(false);
  };

  return (
    <>
      <Row>
        <Col lg="6">
          <h1 className="text-danger ms-4 mt-4"> Daftar Kategori </h1>
        </Col>
        <Col lg="6" className="d-flex flex-row-reverse" id="btn-tambah">
          <button className="Add" onClick={handleTambahKategori}>
            Tambah Kategori
          </button>
        </Col>
      </Row>
      <div className="p-3 table-bordered">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Kategori</th>
              <th scope="col">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.kategori}</td>
                <td className="button me-1">
                  <div className="d-flex">
                    <button
                      id="btn"
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowModal(true);
                      }}
                    >
                      <Icon
                        icon="mdi:trash-can-outline"
                        width="25"
                        height="25"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal konfirmasi */}
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
    </>
  );
}
