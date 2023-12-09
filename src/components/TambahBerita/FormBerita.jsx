import React, { useState } from "react";
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
  });

  function makeRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

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
      const response = await axios.post(
        "http://34.128.69.15:8000/admin/news",
        JSON.stringify({
          adminId: 'PasheE',
          title: formData.title,
          content: formData.content,
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
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
                    Isi Berita
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
