import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Sandeep Prajapati </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            <br/>
            I am a Third year student pursuing a Computer Science degree at 
            Sage University Indore.
            <br />
            <br />
            Moreover, I am currently exploring new technologies and gaining a 
            deeper understanding of them.
            <br />
            <br />
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;