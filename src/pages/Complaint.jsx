import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";
import ModalDetail from "../components/ModalComplaint/detailComplaint";
import Delete from "../components/Modal/delete";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEditModal = (data) => {
    toggleModal();
    setEditData(data);
    setSelectedId(data.id);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  const [modalDelete, setModalDelete] = useState(false);

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    if (modalDelete) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modalDelete]);
  
  return (
    <>
      <TableComplaint onEditModal={handleEditModal} deleteModal={toggleModalDelete} />
      {modal && <Edit onEditModal={toggleModal} editData={editData} id={selectedId} />}
      {modalDelete && <Delete deleteModal={toggleModalDelete} />}
    </>
  );
}
