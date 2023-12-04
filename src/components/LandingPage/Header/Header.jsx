import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/berita",
    display: "Berita",
  },
  {
    path: "/keluhan",
    display: "Keluhan",
  },
  {
    path: "/kontak",
    display: "Kontak",
  },
];

export default function Header() {
  const headerRef = useRef(null);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
    
  };

  useEffect(() => {
    stickyHeaderFunction();
    return window.removeEventListener("scroll", stickyHeaderFunction);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center gap-5">
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt=""></img>
              </Link>
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
