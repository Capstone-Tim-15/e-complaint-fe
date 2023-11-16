// import React from "react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// export default function Complaint() {
//   return (
//     <>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//         <Form.Control
//           placeholder="Username"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Recipient's username"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//         />
//         <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
//       </InputGroup>

//       <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="basic-addon3">
//           https://example.com/users/
//         </InputGroup.Text>
//         <Form.Control id="basic-url" aria-describedby="basic-addon3" />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <InputGroup.Text>$</InputGroup.Text>
//         <Form.Control aria-label="Amount (to the nearest dollar)" />
//         <InputGroup.Text>.00</InputGroup.Text>
//       </InputGroup>

//       <InputGroup>
//         <InputGroup.Text>With textarea</InputGroup.Text>
//         <Form.Control as="textarea" aria-label="With textarea" />
//       </InputGroup>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import TableComplaint from "../components/TableComplaint";
import Edit from "../components/Modal";

export default function ComplaintPage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (document.body) {
    document.body.classList.toggle("active-modal");
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);
  return (
    <>
      <TableComplaint onEditModal={toggleModal} />
      {modal && <Edit onEditModal={toggleModal} />}
    </>
  );
}
