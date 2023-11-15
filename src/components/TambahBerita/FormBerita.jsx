import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './FormBerita.css'

const FormBerita = () => {
  return (
    <div className='text'>
        <h5 className="mb-4">Daftar Berita &gt; <strong>Tambah Berita</strong></h5>
    <div className='berita'>
    <Form>
      <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
        <Form.Label column sm={1}>
          Tanggal
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="date" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Form.Label column sm={1}>
          Judul Berita
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
        <Form.Label column sm={1}>
          Isi Berita
        </Form.Label>
        <Col sm={6}>
          <Form.Control as="textarea" rows={10} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5" controlId="formFile" >
      <Form.Label column sm={1}>
          Gambar
        </Form.Label>
        <Col sm={6}>
        <Form.Control type="file" />
        </Col>  
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col sm={{ span: 10, offset: 6, }}>
          <Button type="submit" variant="danger" className='button'>Save</Button>
        </Col>
      </Form.Group>
    </Form>
    </div> 
    </div>
  );
}

export default FormBerita;