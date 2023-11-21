import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";

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
  return (
    <>
      <TableComplaint onEditModal={handleEditModal} />
      {modal && <Edit onEditModal={toggleModal} editData={editData} id={selectedId} />}
    </>
  );
}
