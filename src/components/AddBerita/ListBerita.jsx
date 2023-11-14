import React from "react";
import { Link } from "react-router-dom";
import './ListBerita.css'

const ListBerita = () => {

    return(
      <div>
        <h1 className="text1"> Daftar Berita </h1>
        <div>
          <button className="Add">Tambah Berita</button>
        </div>
      <div className="mt-2 p-5">
      <table className="table text-center">
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
        <tr>
          <th scope="row">Fery Admin</th>
          <td >Investasi Prospektid, Ini Alasannya</td>
          <td >31 Oktober 2023</td>
          <td >
            <button className="btn btn-success"> Process </button>
          </td>
          <td>
            <button className="btn btn-primary me-2"> edit </button>
            <button className="btn btn-warning"> delete </button>
          </td>
        </tr>
      </tbody>
    </table>
      </div>
      </div>



    )
}

export default ListBerita
