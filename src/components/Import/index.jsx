import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import Select from "react-select";
import "../../styles/import.css";

const StyledExport = styled.div`
  margin-top: 1rem;
  .export {
    display: flex;
    flex-direction: column;
  }

  .card {
    flex-basis: 50%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .tabel {
    flex-basis: 50%;
    margin: 0 0 0 0.5rem;
  }
  th,
  td {
    border: 2px solid #b9b9b9;
    padding: 0.3rem 0.5rem;
    text-align: center;
  }
  th {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    .export {
      flex-direction: row;
    }
  }
`;

export default function ExportComponent() {
  const keluhan = [
    { value: "keluhan", label: "Keluhan" },
    { value: "pengaduan", label: "Pengaduan" },
    { value: "aspirasi", label: "Aspirasi" },
  ];

  const lokasi = [
    { value: "indonesia", label: "Bahasa Indonesia" },
    { value: "inggris", label: "Bahasa Inggris" },
  ];
  return (
    <StyledExport>
      <div className="export">
        <div className="card">
          <div className="export__form-body card-body ">
            <div className="export__header">
              <Row>
                <Icon icon="fe:import" className="icon__import" />
              </Row>
              <Row>
                <p className="header__title">IMPORT</p>
                <span className="header__subtitle">
                  App: ekspor tampilan ini ke file CSV
                </span>
              </Row>
            </div>
            <div className="export__form">
              <Form>
                <Row className="mb-4">
                  <Col>
                    <div className="d-flex flex-column">
                      <p className="export__form-title">Action name</p>
                      <span className="export__form-subtitle">
                        A uniqe name for this action
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <Form.Control
                      className="border-4 border-black"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Label className="export__form-title">
                      Waktu
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="border-4 border-black"
                      type="date"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Label className="export__form-title">
                      Kategori
                    </Form.Label>
                  </Col>
                  <Col>
                    <Select
                      className="export__input-field"
                      options={keluhan}
                      isClearable
                      isSearchable
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <div>
                      <Form.Label className="export__form-title">
                        Jenis tindakan
                      </Form.Label>
                    </div>
                  </Col>
                  <Col>
                    <Form.Control
                      className="border-4 border-black"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <div className="d-flex flex-column">
                      <p className="export__form-title">Lokasi file CSV</p>
                      <span className="export__form-subtitle">
                        Lokal file CSV yang diekspor
                      </span>
                      <span className="export__form-subtitle">
                        atau ekspresi yang menghasilkan lokal
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <Select
                      className="export__input-field"
                      options={lokasi}
                      isClearable
                      isSearchable
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
        <div className="tabel">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Pengguna</th>
                <th>Email</th>
                <th>Nomor Telepon</th>
                <th>Keluhan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ahmad Syaifullah</td>
                <td>ahmad@gmail.com</td>
                <td>089534567890</td>
                <td>Tidak ada keluhan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledExport>
  );
}
