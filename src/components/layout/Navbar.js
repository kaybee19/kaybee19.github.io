import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.scss";
import { useApp } from "../../AppContext";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNav from "react-bootstrap/Navbar";

export default function Navbar() {
  const { width } = useApp();
  const [open, setOpen] = React.useState(false);

  // Get pathname
  const location = useLocation();
  let pathname = location.pathname;

  // Nav link refs
  // const contactLinkRef = React.useRef(null);
  const projectsLinkRef = React.useRef(null);
  const workLinkRef = React.useRef(null);
  const homeLinkRef = React.useRef(null);

  const navLinks = [
    // { name: "contact", color: "#959595", link: "/contact", ref: contactLinkRef },
    {
      name: "projects",
      color: "#FFC619",
      link: "/projects",
      ref: projectsLinkRef,
    },
    { name: "work", color: "#004DA9", link: "/work", ref: workLinkRef },
    { name: "home", color: "#F16701", link: "/", ref: homeLinkRef },
  ];

  const openIcon = <i className="bi bi-menu-button"></i>;
  const closeIcon = <i className="bi bi-menu-app"></i>;
  const menuIcon = open ? openIcon : closeIcon;

  const navMenuClass = width < 650 ? (open ? "navOpen" : "navClose") : "";

  return (
    <BootstrapNav className={navMenuClass}>
      <Container>
        <Nav>
          {navLinks.map((nav, i) => (
            <Link
              key={i}
              to={nav.link}
              className={`link-class ${pathname === nav.link ? "active" : ""}`}
              name={nav.name}
            >
              {nav.name}
            </Link>
          ))}
        </Nav>
      </Container>
      <div className="social-icons">
        <a target="_blank" rel="noreferrer" href="https://github.com/kaybee19">
          <i className="bi bi-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kabir-usman-64868a100/"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.pinterest.com/enigma_no19/"
        >
          <i className="bi bi-pinterest"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:gafaikabir@yahoo.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
      <div id="mobile-menu" onClick={() => setOpen(!open)}>
        {menuIcon}
      </div>
    </BootstrapNav>
  );
}
