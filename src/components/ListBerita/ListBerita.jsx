import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ListBerita.css";
import Popup from "./Popup.jsx";
import { format } from "date-fns";
import id from "date-fns/locale/id";

const ListBerita = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState([]);
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getNews();
  }, [currentPage]);

  const confirmDelete = async () => {
    try {
      await axios
        .delete(`https://api.govcomplain.my.id/admin/news/${newsId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          console.log(result);
          toast.success("Berhasil hapus berita");
        });

      getNews();
    } catch (error) {
      console.error("Error deleting this news request ", error);
      setError("Error deleting news. Please check your JWT token.");
    }
    setModal(false);
  };

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://api.govcomplain.my.id/admin/news?page=" + currentPage,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNews(response.data.results);
      setMeta(response.data.meta);
    } catch (error) {
      console.error("Error fetching news: ", error);
      setError("Error fetching news. Please check your JWT token.");
    }
  };

  const deleteNews = async (newsId) => {
    setModal(true);
    setNewsId(newsId);
  };

  function Pagination({ meta }) {
    const { page, limit, total } = meta;

    const [active, setActive] = useState(page);

    const items = [];
    for (let i = 1; i <= Math.ceil(total / limit); i++) {
      items.push(
        <li className={`page-item ${active === i ? "active" : ""}`}>
          <a
            className="page-link"
            href="javascript:void();"
            onClick={() => {
              setActive(i);
              setCurrentPage(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }

    return (
      <nav aria-label="Page navigation example" class="pagination-red">
        <ul className="pagination">{items}</ul>
      </nav>
    );
  }

  return (
    <div>
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
      <Row className="">
        <Col lg="6">
          <h1 className="text1 ms-4 mb-3"> Daftar Berita </h1>
        </Col>
        <Col lg="6" className="d-flex flex-row-reverse" id="btn-tambah">
          <button className="Add" onClick={() => navigate("/tambahberita")}>
            Tambah Berita
          </button>
        </Col>
      </Row>
      <div className="mt-2">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <table id="table__berita">
          <thead className="thead">
            <tr className="tr__table-berita">
              <th className="th__table-berita" scope="col">
                Author
              </th>
              <th className="th__table-berita" scope="col">
                Judul
              </th>
              <th className="th__table-berita" scope="col">
                Konten
              </th>
              <th className="th__table-berita" scope="col">
                Tanggal
              </th>
              <th className="th__table-berita" scope="col">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id} className="tr__table-berita">
                <td className="td__table-berita">{item.fullname}</td>
                <td className="td__table-berita">{item.title}</td>
                <td className="td__table-berita">{item.content}</td>
                <td className="td__table-berita">
                  {format(new Date(item.date), "d MMMM yyyy", { locale: id })}
                </td>
                <td className="button td__table-berita me-1">
                  <div className="d-flex">
                    <button
                      onClick={() => {
                        navigate(`/editberita?id=${item.id}`);
                      }}
                      className="me-2"
                      id="btn"
                    >
                      <Icon icon="uil:edit" width="25" height="25" />
                    </button>
                    <button onClick={() => deleteNews(item.id)} id="btn">
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
        <Pagination meta={meta} />
      </div>

      <div className={`${modal ? "modal fade show" : "d-none"}`} tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ borderRadius: "1em" }}>
            <div className="modal-body p-4 m-4">
              <div className="px-4 mx-4">
                <Popup />
              </div>
              <div className="mb-4 mt-4">
                Apakah anda yakin <br /> ingin menghapus Berita?
              </div>
              <div className="d-flex border-0 pt-0 justify-content-between">
                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Tidak
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  className="btn btn-ok"
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
