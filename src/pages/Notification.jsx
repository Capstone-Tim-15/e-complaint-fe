import React from 'react'
import {Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import { dataNotif } from '../components/Notification/DummyNotif';

function notification() {
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
            <div className="mt-4 ms-4 p-4">
              <h4>
                Notification{" "}
                <span className="text-danger">{dataNotif.length}</span>
              </h4>
              {dataNotif &&
                dataNotif.map((data, i) => {
                  return (
                    <div
                      key={i}
                      style={{ maxWidth: "900px" }}
                      className="mb-2 p-2 bg-danger bg-opacity-10"
                    >
                      <p>
                        <strong>{data.nama}</strong> memposting keluhan terbaru
                        <span className="text-danger"> {data.keluhan}</span> <span>on category </span>
                        <strong>{data.kategori}</strong>
                      </p>
                      <p className="d-flex justify-content-between">
                        <span className="fs-6 text-sm-start">{data.waktu}</span>
                        <span className="fs-6 text-sm-start text-primary">
                          in more detail
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default notification