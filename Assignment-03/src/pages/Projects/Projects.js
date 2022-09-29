import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import calculator from "../../Assets/Projects/calculator.png"
import currency from "../../Assets/Projects/currency.png"
import qtemu from "../../Assets/Projects/qtemu.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A calculator which made using HTML, CSS, and JavaScript."
              ghLink="https://github.com/fitriaulias/Studi-Independen/tree/master/assignment-01"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency"
              description="A website where we can see the currency rates of CAD, IDR, JPY, CHF, EUR, and GBP based on 1 US dolar."
              ghLink="https://github.com/fitriaulias/Studi-Independen/tree/master/assignment-02/currency-rates"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qtemu}
              isBlog={false}
              title="QTemu App"
              description="A page of website that related to Hacktiv8's meeting for its people."
              ghLink="https://github.com/fitriaulias/Studi-Independen/tree/master/sesi-04/homework/hello-react"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
