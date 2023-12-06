import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";
import Delete from "../components/Modal/delete";
import { useNavigate } from "react-router-dom";
import FaqButton from "../components/FaqButton";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [updateComplaint, setUpdateComplaint] = useState(() => () => {});

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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
    setData((prevData) => prevData.filter((komplaint) => komplaint.id !== deletedItemId));
  };

  return (
    <>
      <TableComplaint onEditModal={handleEditModal} deleteModal={toggleModalDelete} itemsPerPage={10} />
      {modal && <Edit onEditModal={toggleModal} editData={editData} id={selectedId} updateComplaint={updateComplaint} />}
      {modalDelete && <Delete deleteModal={toggleModalDelete} selectedIdForDelete={selectedIdForDelete} onDeleteSuccess={handleDeleteSuccess} />}
      <FaqButton />
    </>
  );
}
