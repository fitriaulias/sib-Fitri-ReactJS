import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fitri Aulia S. </span>
            from <span className="purple"> Karawang, Indonesia.</span>
            <br />I am a A tech-savvy individual who is a student in English Education Universitas Pendidikan Indonesia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching drama
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with my pets
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Fitri Aulia S></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
