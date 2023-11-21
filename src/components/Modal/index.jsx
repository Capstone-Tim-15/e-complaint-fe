import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Nunito Sans";

  p {
    font-weight: 600;
  }
  select,
  textarea {
    width: 100%;
    padding: 0.2rem 0.5rem;
    border-radius: 9px;
    border: 1px solid gray;
    color: #e02216;
    font-weight: 600;
  }
  textarea {
    height: 100px;
    background-color: rgba(243, 167, 162, 0.1);
    outline: none;
    resize: none;
  }
  .close {
    text-align: right;
    margin: 0.3rem;
    border-bottom: 1px solid gray;
    /* outline: none;
    border: none;
    background-color: transparent; */
  }
  .card {
    width: 400px;
  }

  .contain {
    margin: 0.5rem 2rem 1rem;
  }

  input {
    border: 1px solid gray;
    margin-right: 0.5rem;
    background-color: rgba(243, 167, 162, 0.1);
  }
  .actions {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
  }

  .cancel {
    color: red;
    border: 1px solid red;
    background-color: #f3a7a2;
    font-weight: 600;
    padding: 0.1rem 1.3rem;
    border-radius: 10px;
  }
  .save {
    border: none;
    background-color: red;
    color: #fff;
    font-weight: 600;
    padding: 0.1rem 1.3rem;
    border-radius: 10px;
  }
`;
// eslint-disable-next-line react/prop-types
export default function Edit({ onEditModal }) {
  return (
    <StyledModal>
      <div className="overlay" id="overlay"></div>
      <div className="card">
        <div className="close" onClick={onEditModal}>
          <Icon icon="material-symbols:close" width="25" height="25" />
        </div>
        <div className="contain">
          <div className="category">
            <p>Kategori</p>
            <select>
              <option>Lingkungan</option>
              <option>Pendidikan</option>
              <option>Transportasi</option>
            </select>
          </div>
          <div className="state">
            <p>Status</p>
            <select>
              <option>Proses</option>
              <option>Selesai</option>
            </select>
          </div>
          <div className="comment">
            <p>Komentar Status</p>
            <textarea></textarea>
          </div>
          <div className="checklist-notif">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Notifikasi Pengguna
            </label>
          </div>
          <div className="actions">
            <button className="cancel">Batal</button>
            <button className="save">Ubah</button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
}
