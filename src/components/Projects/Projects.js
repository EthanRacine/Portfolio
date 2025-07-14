import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import donkas from "../../Assets/Projects/donkas.png";
import iosChants from "../../Assets/Projects/iosChants.jpg";
import quizitude from "../../Assets/Projects/quizitude.png";
import pantryplanner from "../../Assets/Projects/pantryplanner.png";

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
              imgPath={donkas}
              isBlog={false}
              title="Malaysian Restaurant Website"
              description="A user-friendly website for a Malaysian restaurant featuring an intuitive online menu, reservation system, ordering platform, and a loyalty program. The website enhances the customer experience with a clean design, easy navigation, and seamless integration for booking tables, placing orders, and earning rewards through the loyalty program."
              ghLink="https://github.com/ktan0087/Donkas-Lab"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizitude}
              isBlog={false}
              title="Quizitude"
              description="An AI-powered study application designed to help students manage their learning more effectively. By converting PDFs into customisable flashcards, the app uses artificial intelligence to personalise study sessions and improve retention, making studying more engaging and efficient."
              ghLink="https://github.com/awesomehumphrey/quizitude"
              demoLink="https://quizitude.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iosChants}
              isBlog={false}
              title="iOS Chants App"
              description="An iOS app allowing soccer/football fans to create, share, and vote on chants for their favourite teams. Built in Swift with Firebase for user authentication, real-time database management, and media storage."
              ghLink="https://gitlab.com/ethanras/chant-app"              
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pantryplanner}
              isBlog={false}
              title="Pantry Planner"
              description="A web application that aims to help users plan their meals by seeing recipes based on their pantry, and save money when shopping, as well as being able to import recipes from URLs, photos and text. Supermarket prices are used to help see the price per portion of recipes, as well as help with planning a shopping list."
              demoLink="https://www.pantryplanner.com.au/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
