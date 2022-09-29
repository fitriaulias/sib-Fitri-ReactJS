import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import InterestCard from "./InterestCard";
import laptopImg from "../../Assets/about.png";


function Interest() {
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
              Getting Know <strong className="purple">MY INTEREST</strong>
            </h1>
            <InterestCard />
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

export default Interest;