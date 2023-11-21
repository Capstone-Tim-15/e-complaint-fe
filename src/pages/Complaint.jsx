import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [updateComplaint, setUpdateComplaint] = useState(() => () => {});

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
  return (
    <>
      <TableComplaint onEditModal={handleEditModal} />
      {modal && <Edit onEditModal={toggleModal} editData={editData} id={selectedId} updateComplaint={updateComplaint} />}
    </>
  );
}
