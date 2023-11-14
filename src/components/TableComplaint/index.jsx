import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

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
    max-width: 98%;
    margin: 1rem;
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
export default function TableComplaint() {
  // Array untk tanggal
  const tanggalOptions = Array.from({ length: 31 }, (_, index) => index + 1);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
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
          <tr>
            <td>
              <div className="d-flex">
                <div className="align-self-center">
                  <img src="https://picsum.photos/65" className="rounded-circle "></img>
                </div>
                <p className="ms-1 fw-bold ">Ahmad Nur Syamsudin</p>
              </div>
            </td>
            <td id="desk">Jalan Simatupang yang membutuhkan lebih banyak penerangan, dan perbaikan jalan yang rusak</td>
            <td>Lingkungan</td>
            <td>20 Oktober 2023</td>
            <td id="state">
              <div className="bg-warning text-center px-3 p-1 me-3 rounded-5 self-center">Proses</div>
            </td>
            <td>
              <button onClick={toggleModal}>
                <Icon icon="uil:edit" width="35" height="35" style={{ marginRight: "1.5rem" }} />
              </button>
              <button>
                <Icon icon="mdi:trash-can-outline" width="35" height="35" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="align-self-center">
                  <img src="https://picsum.photos/65" className="rounded-circle "></img>
                </div>
                <p className="ms-1 fw-bold ">Anggi Fatmawati</p>
              </div>
            </td>
            <td id="desk">Dalam rangka meningkatkan kualitas pendidikan di Indonesia, fasilitas merupakan sarana penting dalam pelaksanaannya, Kurangnya Bangku dan meja untuk kelas di SD Melati 2</td>
            <td>Pendidikan</td>
            <td>03 November 2023</td>
            <td id="state">
              <div className="bg-warning text-center px-3 p-1 me-3 rounded-5">Proses</div>
            </td>
            <td>
              <div id="action">
                <button onClick={toggleModal}>
                  <Icon icon="uil:edit" width="35" height="35" style={{ marginRight: "1.5rem" }} onClick={toggleModal} />
                </button>
                <button>
                  <Icon icon="mdi:trash-can-outline" width="35" height="35" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Styledtable>
  );
}
