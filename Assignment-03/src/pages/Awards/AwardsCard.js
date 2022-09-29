import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AwardsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi peeps!
            <br />The following above are some awards that I got in my college age:
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Soon
            </li>
            <li className="about-activity">
              <ImPointRight /> Soon
            </li>
            <li className="about-activity">
              <ImPointRight /> Soon
            </li>
          </ul>
            <br />
            <p style={{ textAlign: "justify" }}> Uh Oh, the awards is still in progress anyway :)</p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Fitri Aulia S></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AwardsCard;