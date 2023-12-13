import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";
import Delete from "../components/Modal/delete";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import FaqButton from "../components/FaqButton";
import axios from "axios";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const { token } = useAuth();
  const [updateComplaint, setUpdateComplaint] = useState(() => () => {});
  const [categoryDropdown, setCategoryDropdown] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(
          "https://6570537e09586eff66412148.mockapi.io/kategori"
        );
        setCategoryDropdown(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEditModal = (data, updateComplaint) => {
    toggleModal();
    setEditData(data);
    setSelectedId(data.id);
    // Ngirim fungsi updateComplaint ke modal
    // Jadi  modal bisa memperbarui data complaint di parent component
    setUpdateComplaint(() => updateComplaint);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  // Fungsi modal delete
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedIdForDelete, setSelectedIdForDelete] = useState(null);

  const toggleModalDelete = (id) => {
    setSelectedIdForDelete(id);
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    if (modalDelete) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modalDelete]);

  const [data, setData] = useState([]);
  const handleDeleteSuccess = (deletedItemId) => {
    // Update state data setelah item dihapus
    setData((prevData) =>
      prevData.filter((komplaint) => komplaint.id !== deletedItemId)
    );
  };

  return (
    <>
      <TableComplaint
        onEditModal={handleEditModal}
        deleteModal={toggleModalDelete}
        itemsPerPage={10}
        categoryDropdown={categoryDropdown}
      />
      {modal && (
        <Edit
          onEditModal={toggleModal}
          editData={editData}
          id={selectedId}
          updateComplaint={updateComplaint}
          categoryDropdown={categoryDropdown}
        />
      )}
      {modalDelete && (
        <Delete
          deleteModal={toggleModalDelete}
          selectedIdForDelete={selectedIdForDelete}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </>
  );
}
