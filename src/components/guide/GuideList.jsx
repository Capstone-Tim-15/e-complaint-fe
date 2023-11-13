import React from "react";
import ServiceCard from "./GuideCard";
import { Col } from "react-bootstrap";

import keluhan from "../../assets/keluhan.png";
import berita from "../../assets/berita.png";
import data from "../../assets/data.png";

const serviceData = [
  {
    img: keluhan,
    title: "Keluhan",
    desc: "Ajukan keluhan untuk menyampaikan aspirasi terbaik",
    link: "READ HERE",
  },
  {
    img: berita,
    title: "Berita",
    desc: "Temukan berita terbaru tentang pengaduan masyarakat di menu ini",
    link: "READ HERE",
  },
  {
    img: data,
    title: "Data",
    desc: "Akses keluhan masyarakat di menu terbaik",
    link: "ACCESS HERE",
  },
];

export default function ServiceList() {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item}></ServiceCard>
        </Col>
      ))}
    </>
  );
}
