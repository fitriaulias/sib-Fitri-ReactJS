import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function InterestCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Folks! I am <span className="purple">Fitri Aulia S. </span>
            <br />As you know from the about section that I'm an English Education student, you may ask why I take this way or why I should try to code?
            <br />
            <br />
            The answer is simple, here are my answers:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I love to do unique things outside of my daily life
            </li>
            <li className="about-activity">
              <ImPointRight /> It is fun to code and try to solve the problem
            </li>
            <li className="about-activity">
              <ImPointRight /> I think I'm in love with coding
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

export default InterestCard;