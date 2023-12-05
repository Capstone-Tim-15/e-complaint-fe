import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function DaftarKategori() {
  const navigate = useNavigate();

  const handleTambahKategoriClick = () => {
    navigate("/tambahkategori");
  };

  return (
    <>
      <Row>
        <Col lg="6">
          <h1 className="text-danger ms-4 mt-4"> Daftar Kategori </h1>
        </Col>
        <Col lg="6" className="d-flex flex-row-reverse" id="btn-tambah">
          <button className="Add" onClick={handleTambahKategoriClick}>
            Tambah Kategori
          </button>
        </Col>
      </Row>
      <div className="p-3 table-bordered">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Kategori</th>
              <th scope="col">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Some long category name</td>
              <td className="button me-1">
                <div className="d-flex">
                  <button id="btn">
                    <Icon icon="mdi:trash-can-outline" width="25" height="25" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
