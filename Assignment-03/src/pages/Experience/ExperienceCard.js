import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, for your information, at this time I still have no experience. In order to make you believe in my skills, here are some of my courses that I attended before:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> React and React Native</span> by Hacktiv8 (Kampus Merdeka MSIB)
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Basic Web Developer: HTML, CSS, and JavaScript</span> (Udemy)
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Fundamental Python</span> (Udemy)
            </li>
          </ul>

          {/* Kalau mau pake quote */}
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Fitri Aulia S></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;