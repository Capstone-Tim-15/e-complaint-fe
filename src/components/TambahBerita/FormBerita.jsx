import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./FormBerita.css";

const FormBerita = () => {
  return (
    <>
      <div className="text">
        <h5 className="title__form-berita mb-4">
          Daftar Berita &gt; <span>Tambah Berita</span>
        </h5>
        <Col lg="6">
          <Form className="form__berita">
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalEmail"
            >
              <Form.Label lg="2" column as={"Label"}>
                Tanggal
              </Form.Label>
              <Col lg="9" className="ms-3">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalPassword"
            >
              <Form.Label lg="2" column>
                Judul Berita
              </Form.Label>
              <Col lg="9" className="ms-3">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalPassword"
            >
              <Form.Label column lg="2">
                Isi Berita
              </Form.Label>
              <Col lg="9" className="ms-3">
                <Form.Control as="textarea" rows={10} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-5" controlId="formFile">
              <Form.Label column lg="2">
                Gambar
              </Form.Label>
              <Col lg="9" className="ms-3">
                <Form.Control type="file" className="mb-4" />
                <div className="d-flex flex-row-reverse">
                  <Button
                    type="submit"
                    variant="danger"
                    className="button__form-berita"
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </div>
    </>
  );
};

export default FormBerita;
