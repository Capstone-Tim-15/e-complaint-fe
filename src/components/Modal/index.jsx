/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Nunito Sans";
  background: rgba(0, 0, 0, 0.5); /* Warna hitam dengan opacity 0.5 */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
    margin-bottom: 1rem;
  }

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
  label,
  select {
    width: 100%;
  }
  .checklist-notif {
    display: flex;
  }

  /* textarea {
    height: 100px;
    background-color: rgba(243, 167, 162, 0.1);
    outline: none;
    resize: none;
  } */
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

  .container {
    margin: 0.3rem;
    width: 98%;
    margin-top: 1rem;
  }

  input {
    border: 1px solid gray;
    margin-right: 0.5rem;
    background-color: rgba(243, 167, 162, 0.1);
  }
  .category,
  .status {
    margin-bottom: 1rem;
  }
  .actions {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
  }

  .canceling {
    color: red;
    border: 1px solid red;
    background-color: #f3a7a2;
    font-weight: 600;
    padding: 0.1rem 1.3rem;
    border-radius: 10px;
  }
  .saving {
    border: none;
    background-color: red;
    color: #fff;
    font-weight: 600;
    padding: 0.1rem 1.3rem;
    border-radius: 10px;
  }
  @media only screen and (max-width: 600px) {
    margin: 1rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
// eslint-disable-next-line react/prop-types
export default function Edit({ onEditModal, editData, id, updateComplaint }) {
  // const { id } = useParams();
  const [complaint, setComplaint] = useState({
    category: "",
    state: "",
    description: "",
  });
  const [formError, setFormError] = useState({
    category: false,
    state: false,
    description: false,
  });
  useEffect(() => {
    if (editData) {
      const { category, state } = editData;
      setComplaint({ category, state });
    }
  }, [editData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, state } = complaint;
    const errors = {
      category: !category,
      state: !state,
      // description: !description,
    };
    if (Object.values(errors).some((error) => error)) {
      setFormError(errors);
      return;
    }
    try {
      await axios.put(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/complaint/${id}`, {
        category,
        state,
        // description,
      });
      onEditModal();

      // Merbarui data complaint di parent component
      updateComplaint();
      setComplaint({
        category: "",
        state: "",
        // description: "",
      });
      setFormError({
        category: false,
        state: false,
        // description: false,
      });
    } catch (error) {
      console.log("Gagal Mengedit Data", error);
    }
  };
  useEffect(() => {
    if (id) {
      const fetchComplaintData = async () => {
        try {
          const response = await axios.get(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/complaint/${id}`);
          const { category, state, description } = response.data;
          setComplaint({ category, state, description });
        } catch (error) {
          console.error("Gagal memuat data complain untuk diedit", error);
        }
      };
      fetchComplaintData();
    }
  }, [id]);

  return (
    <StyledModal>
      <div className="overlay">
        <div className="card">
          <div className="close" onClick={onEditModal}>
            <Icon icon="material-symbols:close" width="25" height="25" />
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="category">
                <label>
                  <span>Kategori</span>
                  <br />
                  <select name="category" id="inputCategory" value={complaint.category} onChange={handleChange}>
                    <option value="" disabled>
                      Kategori
                    </option>
                    <option value="Lingkungan">Lingkungan</option>
                    <option value="Pendidikan">Pendidikan</option>
                    <option value="Transportasi">Transportasi</option>
                  </select>
                  {formError.category && <div className="error">{formError.category}</div>}
                </label>
              </div>
              <div className="status">
                <label>
                  <span>Status</span>
                  <select name="state" id="inputState" value={complaint.state} onChange={handleChange}>
                    <option value="" disabled>
                      Status
                    </option>
                    <option value="Proses">Proses</option>
                    <option value="Selesai">Selesai</option>
                  </select>
                  {formError.state && <div className="error">{formError.state}</div>}
                </label>
              </div>
              {/* <div className="description">
                <label>
                  <span>Komentar Status</span>
                  <textarea name="description" id="inputdescription" value={complaint.description} onChange={handleChange}></textarea>
                  {formError.description && <div className="error">{formError.description}</div>}
                </label>
              </div> */}
              <div className="actions">
                <button className="canceling" onClick={onEditModal}>
                  Batal
                </button>
                <button type="submit" className="saving">
                  Ubah
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledModal>
  );
}
