import { Modal } from "react-bootstrap";

const ModalDetail = ({ show, handleClose, data }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Keluhan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Tampilkan detail keluhan di sini menggunakan properti 'data' */}
                    <p>{data && data.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalDetail