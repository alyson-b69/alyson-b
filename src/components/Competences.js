import React from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Card,
} from "react-bootstrap";
import {
  GiGecko,
  GiThreeFriends,
  GiPencilBrush,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import html from "../img/html.jpg";
import js from "../img/js.jpg";
import css from "../img/css.png";
import node from "../img/node.jpg";
import php from "../img/php.jpg";
import python from "../img/python.jpg";
import sql from "../img/sql.jpg";
import react from "../img/react.jpg";
import express from "../img/express.jpg";
import bootstrap from "../img/bootstrap.jpg";
import firebase from "../img/firebase.jpg";
import mysql from "../img/mysql.jpg";
import vscode from "../img/vscode.jpg";
import github from "../img/github.jpg";
import slack from "../img/slack.jpg";
import postman from "../img/postman.jpg";
import figma from "../img/figma.jpg";
import photoshop from "../img/photoshop.jpg";
import procreate from "../img/procreate.jpg";
import { Zoom, Fade } from "react-reveal";

const Competences = () => {
  return (
    <section id="competences">
      <Container className="pt-5 pb-5">
        <Row className="mb-2">
          <h1 className="text-uppercase">
            {" "}
            <FaCode fontSize="1.3em" className="mb-2 mr-2" />
            Compétences
          </h1>
        </Row>
        <Row className="mb-2">
          <h2 className="myColor">Soft Skills</h2>
        </Row>
        <Fade top>
          <Row className="mb-5">
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Title as="h3">Esprit d'équipe</Popover.Title>
                  <Popover.Content>
                    <p className="quote">
                      <ImQuotesLeft className="mr-2" />
                      Toute seule je vais vite, ensemble on va loin ...
                      <ImQuotesRight className="ml-2" />
                    </p>
                    <strong>Ensemble - Grand Corps Malade</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Col className="col-12 col-md-3 mt-4 pointer">
                <GiThreeFriends fontSize="4em" />
                <p className="mt-2">Esprit d'équipe</p>
              </Col>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Title as="h3">Capacité d'adaptation</Popover.Title>
                  <Popover.Content>
                    <p className="quote">
                      <ImQuotesLeft className="mr-2" />
                      Ce qui fait l'Homme, c'est sa grande faculté d'adaptation.
                      <ImQuotesRight className="ml-2" />
                    </p>
                    <strong>Socrate</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Col className="col-12 col-md-3 mt-4 pointer">
                <GiGecko fontSize="4em" />
                <p className="mt-2">Capacité d'adaptation</p>
              </Col>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-top`}>
                  <Popover.Title as="h3">Curiosité</Popover.Title>
                  <Popover.Content>
                    <p className="quote">
                      <ImQuotesLeft className="mr-2" />
                      La curiosité est le plus court chemin menant à la
                      connaissance.
                      <ImQuotesRight className="ml-2" />
                    </p>
                    <strong>Radmou</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Col className="col-12 col-md-3 mt-4 pointer">
                <GiMagnifyingGlass fontSize="4em" />
                <p className="mt-2">Curiosité</p>
              </Col>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Title as="h3">Créativité</Popover.Title>
                  <Popover.Content>
                    <p className="quote">
                      <ImQuotesLeft className="mr-2" />
                      La créativité, c'est l'intelligence qui s'amuse.
                      <ImQuotesRight className="ml-2" />
                    </p>
                    <strong>Alberto</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Col className="col-12 col-md-3 mt-4 pointer">
                <GiPencilBrush fontSize="4em" />
                <p className="mt-2">Créativité</p>
              </Col>
            </OverlayTrigger>
          </Row>
        </Fade>

        <Row className="mb-2">
          <h2 className="myColor">Hard Skills</h2>
        </Row>

        <Row>
          <Col className="col-12 col-md-4 mt-4">
            <h4>LANGUAGES</h4>
            <Col>
              <Zoom>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={html} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">HTML</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={css} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">CSS</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={js} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">JavaScript</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={sql} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">SQL</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={php} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">PHP</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={python} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Python</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
              </Zoom>
            </Col>
          </Col>
          <Col className="col-12 col-md-4 mt-4">
            <h4>FRAMEWORKS & LIBS</h4>
            <Col>
              <Zoom>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={node} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Node JS</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={react} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">React JS</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={express} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Express JS</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={bootstrap} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Bootstrap</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={firebase} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Firebase</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={mysql} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">MySql</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
              </Zoom>
            </Col>
          </Col>
          <Col className="col-12 col-md-4 mt-4">
            <h4>OUTILS</h4>
            <Col>
              <Zoom>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={vscode} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">VS Code</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={github} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Github</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={postman} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Postman</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={slack} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Slack</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={figma} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Figma</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={photoshop} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">Photoshop</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="mt-3 justify-content-center align-items-center ">
                  <Card style={{ width: "80%", color: "#1a1e23" }}>
                    <Card.Img variant="top" src={procreate} />
                    <Card.Body className="pt-2 pb-2">
                      <Card.Title className="mb-0">ProCreate</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
              </Zoom>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Competences;
