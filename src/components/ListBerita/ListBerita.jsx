import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ListBerita.css";

const ListBerita = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(
      "https://6554737263cafc694fe67aef.mockapi.io/berita"
    );
    setNews(response.data);
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://6554737263cafc694fe67aef.mockapi.io/berita`
      );
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news: ", error);
    }
  };

  const addNews = async () => {
    try {
      await axios.post(
        `https://6554737263cafc694fe67aef.mockapi.io/berita`,
        newNews
      );
      fetchNews();
      setNewBook({ judul: "", author: "", tanggal: "", status: "" });
    } catch (error) {
      console.error("Error adding news: ", error);
    }
  };

  const deleteNews = async (newsId) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      try {
        await axios.delete(
          `https://6554737263cafc694fe67aef.mockapi.io/berita/${newsId}`
        );
        fetchNews();
      } catch (error) {
        console.error("Error deleting this news request ", error);
      }
    }
  };

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
        <table
          id="table__berita"
          className="table table-borderless text-center"
        >
          <thead id="table__berita" className="thead">
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Judul</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Status</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody id="table__berita">
            {news.map((news, index) => (
              <tr key={news.id} id="table__berita">
                <td>{news.author}</td>
                <td>{news.judul}</td>
                <td>{news.tanggal}</td>
                <td className="status">
                  <p className="bg-warning text-white" id="text2">
                    {news.status}
                  </p>
                </td>
                <td className="button me-1">
                  <button className="me-2" id="btn">
                    <Icon icon="uil:edit" width="25" height="25" />
                  </button>
                  <button onClick={() => deleteNews(news.id)} id="btn">
                    <Icon icon="mdi:trash-can-outline" width="25" height="25" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBerita;
