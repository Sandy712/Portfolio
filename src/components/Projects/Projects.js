import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerce.png";
import weather from "../../Assets/Projects/weather.png";
import text from "../../Assets/Projects/text.png";
import whats from "../../Assets/Projects/whatsapp.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="TreasurEase"
              description="Build a dynamic e-commerce website with ReactJS, enabling users to register, log in, and shop. Implement a seamless cart system, allowing users to add, remove, and purchase products. Enhance the shopping experience with product filtering, providing quick access to desired items."
              ghLink="https://github.com/Sandy712/Ecommerce_website"
              demoLink="https://treasurease-ecommerce.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Mausam.UI"
              description="Develop a weather website using ReactJS that empowers users to search for weather conditions in any city. Display real-time information such as temperature, humidity, wind speed, and mist. Additionally, integrate a map feature to visualize the location and enhance the user experience."
              ghLink="https://github.com/Sandy712/Weather-app"
              demoLink="https://mausam-007.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text-counter"
              description="Develop a text-counter website with ReactJS, enabling users to input text and manipulate it effortlessly. Convert the text to uppercase or lowercase with just a click. Implement clipboard integration for easy copying. Users can clear the text and even utilize the speak functionality, which reads out the entered text aloud, enhancing accessibility and convenience"
              ghLink="https://github.com/Sandy712/Text-Counter"
              demoLink="https://text-counter007.netlify.app"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whats}
              isBlog={false}
              title="We-Chat"
              description="Create a dynamic WhatsApp-like website using Node.js, HTML, CSS, and JavaScript. Users can communicate in real-time by sending text messages and emojis. Implement a video chat feature using Express server for seamless face-to-face communication. The website will offer a user-friendly interface, ensuring smooth messaging and engaging video calls between users."
              ghLink="https://github.com/Sandy712/Whatsapp-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;