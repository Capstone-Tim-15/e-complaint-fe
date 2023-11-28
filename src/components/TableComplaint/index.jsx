import styled from "styled-components";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ListComplaint from "./ListComplaint";
import { Icon } from "@iconify/react";

const Styledtable = styled.div`
  font-family: "Nunito Sans";
  margin-top: 1.5rem;
  .custom-card {
    border: none;
    border-bottom: 1px solid gray;
    margin: 0 0 1rem 0;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .card-body {
    padding: 1rem;
  }
  h2,
  h3 {
    color: #e02216;
    font-weight: 700;
  }

  #state {
    padding: 0.5rem;
  }
  table {
    margin-top: 1rem;
    border-collapse: collapse;
    width: 100%;
  }
  /* #desk {
    max-width: 250px;
  } */
  th,
  td {
    padding: 1.5rem 1rem 1.5rem 1rem;
    vertical-align: middle;
    border-bottom: 2px solid red;
  }
  p {
    padding: 1.5rem 1rem 0 1rem;
    vertical-align: middle;
  }

  button {
    border: none;
    background-color: #fff;
    outline: none;
  }
  .card-drop {
    display: flex;
  }
  .drop {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  .dropdown select {
    margin: 1.5rem;
    width: 150px;
    border-radius: 20px;
    color: red;
    font-weight: 600;
    cursor: pointer;
    border: 1.5px solid red;
    margin: 0.4rem;
    padding: 0 0.5rem;
    width: 85%;
  }
  /* #action {
    display: flex;
  } */

  #pagination {
    text-align: right;
    justify-content: center;
    justify-content: space-evenly;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-end;
    font-weight: 700;
    color: #e64e45;
  }
  .pageList,
  span {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
  }
  .button {
    align-self: center;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  .button-arrow-left {
    background-color: #e64e45;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }

  .button-arrow-right {
    background-color: #e64e45;
    color: #fff;
    text-align: center;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  @media only screen and (max-width: 600px) {
    table {
      border: 1px solid #ccc;
    }

    th,
    td {
      padding: 8px 1rem;
      display: block;
      width: 100%;
    }

    th {
      text-align: center;
    }

    td {
      text-align: left;
    }
  }
  @media screen and (min-width: 768px) {
    .drop {
      display: flex;
      flex-direction: row;
    }
    .dropdown select {
      margin: 1rem;
      width: 150px;
      border-radius: 20px;
      padding: 0.2rem 1rem 0.2rem 1rem;
      border: 1.5px solid red;
      color: red;
      font-weight: 600;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 992px) {
    .dropdown select {
      margin: 1.5rem;
      width: 150px;
      border-radius: 20px;
      padding: 0.2rem 1rem 0.2rem 1rem;
      border: 1.5px solid red;
      color: red;
      font-weight: 600;
      cursor: pointer;
    }
    #desk {
      max-width: 300px;
    }
  }
`;
// eslint-disable-next-line react/prop-types
export default function TableComplaint({
  onEditModal,
  deleteModal,
  itemsPerPage,
}) {
  // Array untk tanggal
  const tanggalOptions = Array.from({ length: 31 }, (_, index) => index + 1);
  // Array Page Pagination
  const pageOptions = Array.from({ length: 7 }, (_, index) => index + 1);
  const [complaint, setComplaint] = useState([]);

  // state untuk pagination page
  const [currentPage, setCurrentPage] = useState(1);

  const totalComplaint = complaint.length;

  useEffect(() => {
    const getComplaint = async () => {
      try {
        const response = await axios.get(
          "https://6524e7f8ea560a22a4ea3f65.mockapi.io/complaint"
        );
        setComplaint(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getComplaint();
  }, []);

  const updateComplaint = async () => {
    try {
      const response = await axios.get(
        "https://6524e7f8ea560a22a4ea3f65.mockapi.io/complaint"
      );
      setComplaint(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  // handlePage ketika berubah
  // ------------- START CODE ----------------
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = complaint.slice(indexOfFirstItem, indexOfLastItem);

  // --------------- LAST CODE handlePage --------------
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
            <Styledtable>
              <div className="custom-card">
                <div className="card-drop">
                  <div className="card-body">
                    <h3 id="judul">{totalComplaint} Total Laporan</h3>
                  </div>
                  <div className="drop">
                    <div className="dropdown">
                      <select>
                        <option value="" disabled selected>
                          Kategori
                        </option>
                        <option>Lingkungan</option>
                        <option>Pendidikan</option>
                      </select>
                    </div>
                    <div className="dropdown">
                      <select id="tanggal" name="tanggal">
                        <option value="" disabled selected>
                          Tanggal
                        </option>
                        {tanggalOptions.map((tanggal) => (
                          <option key={tanggal} value={tanggal}>
                            {tanggal}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="dropdown">
                      <select>
                        <option value="" disabled selected>
                          Status
                        </option>
                        <option>Proses</option>
                        <option>Selesai</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nama</th>
                    <th scope="col" id="desk">
                      Deskripsi
                    </th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map(function (komplain) {
                    return (
                      <ListComplaint
                        key={komplain.id}
                        komplain={komplain}
                        onEditModal={() =>
                          onEditModal(komplain, updateComplaint)
                        }
                        deleteModal={() => deleteModal(komplain)}
                      />
                    );
                  })}
                </tbody>
              </table>
              <div id="pagination">
                <div className="thisPage">
                  {currentPage} | {Math.ceil(complaint.length / itemsPerPage)}
                </div>
                <li className="pageList">
                  {pageOptions.map((pageNumber) => (
                    <span
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      style={{ marginRight: "1rem", cursor: "pointer" }}
                    >
                      {pageNumber}
                    </span>
                  ))}
                </li>
                <div className="button">
                  <button
                    className="button-arrow-left"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <Icon
                      icon="formkit:arrowleft"
                      width="24"
                      style={{ margin: "6px" }}
                    />
                  </button>
                  <button
                    className="button-arrow-right"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <Icon
                      icon="formkit:arrowright"
                      width="24"
                      style={{ margin: "6px" }}
                    />
                  </button>
                </div>
              </div>
            </Styledtable>
          </Col>
        </Row>
      </Row>
    </>
  );
}
