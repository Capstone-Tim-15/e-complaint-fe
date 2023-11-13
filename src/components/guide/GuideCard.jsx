import React from "react";
import "./guide.css";

export default function ServiceCard({ item }) {
  const { img, title, desc, link } = item;

  return (
    <div className="service__item">
      <div className="service__img d-flex align-items-center justify-content-center">
        <img src={img} alt="" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
      <button>{link}</button>
    </div>
  );
}
