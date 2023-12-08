import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ListBerita.css";
import Popup from "./Popup.jsx";

const ListBerita = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState([]);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getNews();
  }, [currentPage]);

  const confirmDelete = async () => {
    try {
          const token = localStorage.getItem("token"); 
          await axios.delete(`https://api.govcomplain.my.id/admin/news/${newsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getNews();
    } catch (error) {
      console.error("Error deleting this news request ", error);
      setError("Error deleting news. Please check your JWT token.");
    }
    setModal(false);
  }

  const getNews = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://api.govcomplain.my.id/admin/news?page=" + currentPage, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNews(response.data.results);
      setMeta(response.data.meta);
    } catch (error) {
      console.error("Error fetching news: ", error);
      setError("Error fetching news. Please check your JWT token.");
    }
  };

  const deleteNews = async (newsId) => {
    setModal(true)
    setNewsId(newsId);
  };

  function Pagination({ meta }) {
    const { page, limit, total } = meta

    const [active, setActive ] = useState(page);

    const items = [];
    for (let i = 1; i <= Math.ceil(total/limit); i++) {
      items.push(
        <li className={`page-item ${(active === i ? "active" : "")}`}>
          <a className="page-link" href="javascript:void();" onClick={() => {
            setActive(i);
            setCurrentPage(i);
          }}>{i}</a>
        </li>
      )
    }

    return (
      <nav aria-label="Page navigation example" class="pagination-red">
        <ul className="pagination">
          { items }
        </ul>
      </nav>
    )
  }

  return (
    <div>
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
        <table id="table__berita" className="table table-bordered text-left">
          <thead id="table__berita" className="thead">
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Judul</th>
              <th scope="col">Konten</th>
              <th scope="col">Tanggal</th>
               <th scope="col">Status</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody id="table__berita">
            {news.map((item) => (
              <tr key={item.id} id="table__berita">
                <td>{item.adminId}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.date}</td>
                <td className="status">
                  <p className="text-white" id="text2">
                    TEerbut
                  </p>
                </td>
                <td className="button me-1">
                  <div className="d-flex">
                    <button onClick={() => {navigate(`/editberita?id=${item.id}`)}} className="me-2" id="btn">
                      <Icon icon="uil:edit" width="25" height="25" />
                    </button>
                    <button onClick={() => deleteNews(item.id)} id="btn">
                      <Icon icon="mdi:trash-can-outline" width="25" height="25" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination meta={meta} />
      </div>

      <div className={ `${modal ? 'modal fade show' : 'd-none'}` } tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ borderRadius: '1em' }}>
            <div className="modal-body p-4 m-4">
              <div className="px-4 mx-4">
              <Popup />
              </div>
              <div className="mb-4 mt-4">Apakah anda yakin <br/> ingin menghapus Berita?</div>
              <div className="d-flex border-0 pt-0 justify-content-between">
                <button type="button" onClick={() => setModal(false)} className="btn btn-cancel" data-bs-dismiss="modal">Tidak</button>
                <button type="button" onClick={confirmDelete} className="btn btn-ok">Ya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
