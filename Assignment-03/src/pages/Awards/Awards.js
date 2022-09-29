import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import AwardsCard from "./AwardsCard";
import laptopImg from "../../Assets/about.png";


function Awards() {
  return (
    <>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Scroll down to check<strong className="purple"> MY AWARDS</strong>
            </h1>
            <AwardsCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          </Row>
        </Container>
    </Container>
    </>
    );
    }

export default Awards;