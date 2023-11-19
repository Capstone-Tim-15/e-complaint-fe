import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEditModal = (data) => {
    setEditData(data);
    toggleModal();
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
      {modal && <Edit onEditModal={toggleModal} editData={editData} />}
    </>
  );
}
