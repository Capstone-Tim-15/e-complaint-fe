import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { useNavigate } from "react-router-dom";
import "./FormBerita.css";

const FormBerita = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    content: "",
    id: '',
    adminId: '',
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const id = (new URLSearchParams(document.location.search)).get('id');
    if (!id) {
      navigate("/berita");
    }

    axios.get('https://api.govcomplain.my.id/admin/news/search?id=' + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const { data } = res;
      const {results} = data;
      const { adminId, content, date, title } = results;

      const dateObj = new Date(date);

      setFormData({
        date: `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`,
        title,
        content,
        id,
        adminId,
      })
    })
  }, [])
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://api.govcomplain.my.id/admin/news/${formData.id}`,
        {...formData, ...{date: new Date(formData.date)}},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.meta.success) {
        navigate("/berita");
      } else {
        console.error("Error adding news: ", response.data.meta.message);
      }
    } catch (error) {
      console.error("Error adding news: ", error);
    }
  };

  return (
    <>
      <Row as="row">
        <Col lg="12">
          <Topbar />
        </Col>
        <Row as="row">
          <Col lg="2">
            <Sidebar />
          </Col>
          <Col lg="10">
            <Row className="d-flex justify-content-center align-items-center">
              <Col lg="12">
                <h1 className="text1 ms-4 mb-3">
                  {" "}
                  <button
                    className="daftar__berita"
                    onClick={() => navigate("/berita")}
                  >
                    Daftar Berita
                  </button>{" "}
                  &gt; <span className="tambah__berita">Tambah Berita</span>{" "}
                </h1>
              </Col>
            </Row>
            <Col lg="6">
              <Form className="form__berita" onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-4"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label lg="2" column as={"Label"}>
                    Tanggal
                  </Form.Label>
                  <Col lg="9" className="ms-3">
                    <Form.Control
                      type="date"
                      name="date"
                      onChange={handleChange}
                      value={formData.date}
                    />
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
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={handleChange}
                      value={formData.title}
                    />
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
                    <Form.Control
                      as="textarea"
                      rows={10}
                      name="content"
                      onChange={handleChange}
                      value={formData.content}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-4"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column lg="2">
                    Gambar
                  </Form.Label>
                  <Col lg="9" className="ms-3">
                    <Form.Control
                      type="file"
                      name="image"
                    />
                  </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4">
                  <Col sm={{ span: 10, offset: 7, }}>
                      <Button
                        type="submit"
                        variant="danger"
                        className="button__form-berita"
                      >
                        Save
                      </Button>
                      </Col>
                      </Form.Group>
              </Form>
            </Col>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default FormBerita;
