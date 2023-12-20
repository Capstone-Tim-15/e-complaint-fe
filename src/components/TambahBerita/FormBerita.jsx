import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import { Button, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import { useNavigate } from "react-router-dom";
import "./FormBerita.css";

const FormBerita = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminId: "PasheE",
    title: "",
    content: "",
    categoryId: "3QRQv1",
    attachment: null,
  });

  const handleChangeTittle = (e) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setFormData({
      ...formData,

      content: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { adminId, title, content, categoryId, attachment } = formData;

      const formDataObj = new FormData();
      formDataObj.append("adminId", adminId);
      formDataObj.append("title", title);
      formDataObj.append("content", content);
      formDataObj.append("categoryId", categoryId);
      formDataObj.append("attachment", attachment);

      const response = await axios.post(
        "https://api.govcomplain.my.id/admin/news",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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
                ></Form.Group>
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
                      onChange={handleChangeTittle}
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
                      onChange={handleChangeContent}
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
                      name="attachment"
                      onChange={handleImageChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4">
                  <Col sm={{ span: 10, offset: 7 }}>
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
