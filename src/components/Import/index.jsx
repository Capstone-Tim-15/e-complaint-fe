import { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import Papa from "papaparse";

export default function ImportComponent() {
  const [title, setTitle] = useState("");
  const [csvData, setCsvData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const csvString = event.target.result;

      try {
        const parsedData = await parseCsvFile(csvString);
        setCsvData(parsedData);

        // Mengambil nama file dari input file
        const fileName = file.name.split(".")[0];
        setTitle(fileName);
      } catch (error) {
        console.error("Error parsing CSV:", error);
        setCsvData([]);
      }
    };

    reader.readAsText(file);
  };

  const parseCsvFile = async (csvString) => {
    return new Promise((resolve, reject) => {
      Papa.parse(csvString, {
        complete: (result) => {
          resolve(result.data);
        },
        header: true,
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  const handleContinue = () => {
    // mengiriman data
    console.log("CSV Data:", csvData);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <Row>
      <Col md={6}>
        <div className="p-3 mt-3">
          <table>
            <tbody>
              <tr>
                <td>Last Modified</td>
                <td style={{ fontWeight: "bold", paddingLeft: "50px" }}>
                  {new Date().toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td>Created</td>
                <td style={{ fontWeight: "bold", paddingLeft: "50px" }}>
                  {new Date().toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td>By</td>
                <td style={{ fontWeight: "bold", paddingLeft: "50px" }}>
                  admin@govmail.com
                </td>
              </tr>
              <tr>
                <td>Modified</td>
                <td style={{ fontWeight: "bold", paddingLeft: "50px" }}>
                  admin@govmail.com
                </td>
              </tr>
            </tbody>
          </table>

          <Form.Group controlId="title" className="mt-5">
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter complaint title"
              style={{ width: "60%" }}
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="fw-bold">Import CSV</Form.Label>
            <Form.Control
              type="file"
              id="csvFile"
              label="Import CSV"
              style={{ width: "60%" }}
              onChange={handleFileImport}
            />
          </Form.Group>

          <Button variant="danger" className="mt-3" onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </Col>

      <Col md={6}>
        {csvData && csvData.length > 0 && (
          <table className="table table-bordered text-center mt-4 p-3 mt-3">
            <thead>
              <tr className="table-secondary">
                {Object.keys(csvData[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sukses!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Data complaint berhasil dikirim.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}
