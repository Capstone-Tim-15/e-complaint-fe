/* eslint-disable react/prop-types */
import styled from "styled-components";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ListComplaint from "./ListComplaint";
import { Icon } from "@iconify/react";
import { useAuth } from "../../contexts/authContext";
import { useNavigate, useParams } from "react-router-dom";

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
  .tindakan {
    text-align: right;
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
  th {
    font-size: 18px;
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
    margin-right: 2rem;
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
    display: flex;
    font-weight: 700;
    color: #e64e45;
    padding: 1rem;
    /* bottom: 0;
    position: fixed;
    background-color: white;
    z-index: 1000;
    width: 100%; */
  }
  .pageList,
  .pageNumber {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    padding: 0 0.5rem 0 0.5rem;
  }
  .pageNumber:hover {
    background-color: #ccc;
    transition: background-color 0.3s ease;
  }
  .pageNumber.active {
    background-color: gray;
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
    transition: transform 0.1s ease;
  }
  .button-arrow-left:hover {
    transform: scale(1.2);
    filter: brightness(80%);
  }

  .button-arrow-right {
    background-color: #e64e45;
    color: #fff;
    text-align: center;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    transition: transform 0.1s ease;
  }
  .button-arrow-right:hover {
    transform: scale(1.2);
    filter: brightness(80%);
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
export default function TableComplaint({ onEditModal, deleteModal, itemsPerPage, categoryDropdown }) {
  // // Array untk tanggal
  // const tanggalOptions = Array.from({ length: 31 }, (_, index) => index + 1);
  const { id } = useParams();

  const [complaint, setComplaint] = useState([]);
  // total pages untuk handle stop click to next page jika sudah totalpages
  const [totalPages, setTotalPages] = useState(1);
  // state untuk pagination page
  const [currentPage, setCurrentPage] = useState(1);
  const { token } = useAuth();
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState([]);
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // const totalComplaint = complaint.length;

  useEffect(() => {
    const getComplaint = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.govcomplain.my.id/admin/complaint`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            category: selectedCategory,
          },
        });
        const { total } = response.data.meta;

        // Set state totalItems
        setTotalItems(total);
        setTotalPages(Math.ceil(total / itemsPerPage));
        setComplaint(response.data.results);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    getComplaint();
  }, [token, itemsPerPage, currentPage, selectedCategory]);

  const updateComplaint = async () => {
    try {
      const response = await axios.get(`https://api.govcomplain.my.id/admin/complaint`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaint(response.data.results);
    } catch (error) {
      console.error("error", error);
    }
  };

  // handle fitur filtered by status
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  // handle fitur filtered by category
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredComplaint = selectedStatus ? complaint.filter((item) => item.status === selectedStatus) : complaint;

  // handlePage ketika berubah
  // ------------- START CODE ----------------
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (filteredComplaint || []).slice(indexOfFirstItem, indexOfLastItem);

  // const currentItems = complaint.slice(indexOfFirstItem, indexOfLastItem);

  // --------------- LAST CODE handlePage --------------
  // function Pagination({ meta }) {
  //   const { page, limit, total } = meta;

  //   const [active, setActive] = useState(page);

  //   const items = [];
  //   for (let i = 1; i <= Math.ceil(total / limit); i++) {
  //     items.push(
  //       <li className={`page-item ${active === i ? "active" : ""}`}>
  //         <a
  //           className="page-link"
  //           href="javascript:void();"
  //           onClick={() => {
  //             setActive(i);
  //             setCurrentPage(i);
  //           }}
  //         >
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }

  //   return (
  //     <nav aria-label="Page navigation example" className="pagination-red">
  //       <ul className="pagination">{items}</ul>
  //     </nav>
  //   );
  // }
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
                    <h3 id="judul">{totalItems} Total Laporan</h3>
                  </div>
                  <div className="drop">
                    <div className="dropdown">
                      <select onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="" disabled selected>
                          Kategori
                        </option>
                        {categoryDropdown.map((category) => (
                          <option key={category.id} value={category.CategoryName}>
                            {category.CategoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="dropdown">
                      <select onChange={handleStatusChange} value={selectedStatus}>
                        <option value="" disabled selected>
                          Status
                        </option>
                        <option value="SEND">SEND</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {loading && <p>Loading...</p>}
              {!loading && (
                <>
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
                        <th scope="col" style={{ textAlign: "right" }}>
                          Tindakan
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map(function (komplain) {
                        return <ListComplaint key={komplain.id} komplain={komplain} onEditModal={() => onEditModal(komplain, updateComplaint)} deleteModal={() => deleteModal(komplain)} />;
                      })}
                    </tbody>
                  </table>
                  {/* <Pagination meta={meta} /> */}
                  <div id="pagination">
                    <div className="thisPage">
                      {currentPage} | {Math.ceil(totalItems / itemsPerPage)}
                    </div>
                    <div className="button">
                      <button className="button-arrow-left" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <Icon icon="formkit:arrowleft" width="24" style={{ margin: "6px" }} />
                      </button>
                      <button className="button-arrow-right" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <Icon icon="formkit:arrowright" width="24" style={{ margin: "6px" }} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Styledtable>
          </Col>
        </Row>
      </Row>
    </>
  );
}
