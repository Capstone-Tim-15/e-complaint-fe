import styled from "styled-components";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ListComplaint from "./ListComplaint";

const Styledtable = styled.div`
  font-family: "Nunito Sans";
  padding: 1rem;
  .card {
    margin-bottom: 1rem;
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
  #desk {
    max-width: 250px;
  }
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
    align-self: center;
  }
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
  #action {
    display: flex;
  }
`;
// eslint-disable-next-line react/prop-types
export default function TableComplaint({ onEditModal }) {
  // Array untk tanggal
  const tanggalOptions = Array.from({ length: 31 }, (_, index) => index + 1);
  const [complaint, setComplaint] = useState([]);
  useEffect(() => {
    const getComplaint = async () => {
      try {
        const response = await axios.get("https://6524e7f8ea560a22a4ea3f65.mockapi.io/complaint");

        setComplaint(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getComplaint();
  }, []);
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
              <div className="card">
                <div className="card-body">
                  <h2 id="judul">Complaint</h2>
                </div>
              </div>
              <div className="card">
                <div className="card-drop">
                  <div className="card-body">
                    <h3 id="judul">Total Laporan</h3>
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
                  {complaint.map(function (komplain) {
                    return <ListComplaint key={komplain.id} komplain={komplain} onEditModal={onEditModal} />;
                  })}
                </tbody>
              </table>
            </Styledtable>
          </Col>
        </Row>
      </Row>
    </>
  );
}
