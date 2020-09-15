import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import alyson from "../img/alyson.jpg";

const About = () => {
  return (
    <section id="about">
      <Container className="pt-5 pb-5">
        <Row>
          <Col className="col-6 col-md-4 align-self-center mx-auto">
            <Image thumbnail rounded src={alyson} alt="alyson-b" width="100%" />
          </Col>
          <Col className="col-12 col-md-8 align-self-center">
            <h1 className="text-uppercase myColor">à propos</h1>
            <h3>Alyson BERNABEU - Développeuse web</h3>
            <br />
            <p className="text-justify">
              Salut, moi c'est Alyson, ancienne comptable devenue développeuse
              web. Du haut de mes 29 ans, j'ai déjà 10 années d'expérience
              professionnelle à mon actif. Vive, curieuse, et très enthousiaste,
              je ne manque jamais d'idées, ni de ressources, pour mener à bien
              les missions qui me sont confiées. Appréciant le travail en
              équipe, j'apporte volontiers, en plus de mes compétences et de mon
              savoir-être, quelques douceurs à partager pour motiver les
              troupes.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
