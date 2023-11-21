import styled from "styled-components";

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
  return (
    <StyledExport>
      <div className="export">
        <div className="card">
          <div className="card-body">
            <h2 id="judul">Export</h2>
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
