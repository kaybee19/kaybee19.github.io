import React from "react";
import "./SelectProjects.scss";
import { projects } from "../../utils/myProjects";

// Comps
import Projects from "./Projects";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function SelectProjects() {
  return (
    <Container className="select">
      {projects.map((pro, i) => (
        <Projects pro={pro} key={i} />
      ))}
    </Container>
  );
}
