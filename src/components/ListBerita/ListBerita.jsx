import React from "react";
import { Icon } from "@iconify/react";

import { Row, Col } from "react-bootstrap";
import "./ListBerita.css";

const ListBerita = () => {
  return (
    <>
      <div>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6">
            <h1 className="text1 ms-4 mb-3"> Daftar Berita </h1>
          </Col>
          <Col lg="6" className="d-flex flex-row-reverse">
            <button className="Add">Tambah Berita</button>
          </Col>
        </Row>

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
              <tr>
                <th scope="row">Fery Admin</th>
                <td>Investasi Prospektif, Ini Alasannya</td>
                <td>31 Oktober 2023</td>
                <td className="status">
                  <p className="bg-warning text-white" id="text2">
                    Proses
                  </p>
                </td>
                <td className="button me-1">
                  <button className="me-2" id="btn">
                    <Icon icon="uil:edit" width="35" height="35" />
                  </button>
                  <button id="btn">
                    <Icon icon="mdi:trash-can-outline" width="35" height="35" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListBerita;
