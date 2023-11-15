import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import './ListBerita.css'

const ListBerita = () => {
  const [news, setNews] = useState ([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get("https://6554737263cafc694fe67aef.mockapi.io/berita");
    setNews(response.data);
  };

  const addNews = async () => {
    try {
      await axios.post(`https://6554737263cafc694fe67aef.mockapi.io/berita`, newNews);
      fetchBooks();
      setNewBook({ judul: '', author: '', tanggal:'', status:'' });
    } catch (error) {
      console.error('Error adding news: ', error);
    }
  };

  const deleteNews = async (id) => {
    try {
      await axios.delete(`https://6554737263cafc694fe67aef.mockapi.io`);
      getNews();
    } catch (error) {
      console.log(error);
    }
  };

    return(
      <div>
        <h1 className="text1 ms-4 mb-3"> Daftar Berita </h1>
        <div>
          <button className="Add">Tambah Berita</button>
        </div>
      <div className="mt-2 p-5">
      <table className="table table-borderless text-center">
      <thead className="thead">
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Judul</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Status</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {news.map((news, index) => (
          <tr key={news.id}>
          <td>{news.author}</td>
          <td >{news.judul}</td>
          <td >{news.tanggal}</td>
          <td className="status">
          <p className="bg-warning text-white" id="text2" >{news.status}</p>
          </td>
          <td className="button me-1">
          <button className="me-2" id="btn">
                  <Icon icon="uil:edit" width="35" height="35"/>
                </button>
          <button  onClick={() => deleteNews(news.id)} id="btn">
                  <Icon icon="mdi:trash-can-outline" width="35" height="35" />
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
      </div>
      </div>
    )
}

export default ListBerita
