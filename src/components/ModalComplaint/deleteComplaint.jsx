import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

const ModalDelete = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Hello</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hello</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalDelete