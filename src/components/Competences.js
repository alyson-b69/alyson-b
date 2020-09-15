import React from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import {
  GiGecko,
  GiThreeFriends,
  GiPencilBrush,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaCode } from "react-icons/fa";

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

        <Row className="mb-2">
          <h2 className="myColor">Hard Skills</h2>
        </Row>

        <Row>
          <Col className="col-12 col-md-4 mt-4">
            <h4>LANGUAGES</h4>
            <Col>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>HTML</div> <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-2">
                <div>CSS</div> <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-2">
                <div>JavaScript</div>{" "}
                <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-2">
                <div>SQL</div> <ProgressBar now={60} label="60%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-2">
                <div>PHP</div> <ProgressBar now={20} label="20%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-2">
                <div>Python</div> <ProgressBar now={10} label="10%" bg="dark" />
              </Row>
            </Col>
          </Col>

          <Col className="col-12 col-md-4 mt-4">
            <h4>FRAMEWORKS & LIBS</h4>
            <Col>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>NodeJS</div> <ProgressBar now={60} label="60%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>ReactJS</div>
                <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>ExpressJS</div>{" "}
                <ProgressBar now={60} label="60%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Bootstrap</div>
                <ProgressBar now={70} label="70%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Firebase</div>{" "}
                <ProgressBar now={70} label="70%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>MySql</div> <ProgressBar now={60} label="60%" bg="dark" />
              </Row>
            </Col>
          </Col>

          <Col className="col-12 col-md-4 mt-4">
            <h4>OUTILS</h4>
            <Col>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>VS Code</div>
                <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Git </div>
                <ProgressBar now={70} label="70%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Postman</div>
                <ProgressBar now={60} label="60%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Slack</div>
                <ProgressBar now={80} label="80%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Figma</div>
                <ProgressBar now={40} label="40%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>Photoshop</div>
                <ProgressBar now={70} label="70%" bg="dark" />
              </Row>
              <Row className="d-flex flex-row justify-content-between mt-3">
                <div>ProCreate</div>
                <ProgressBar now={70} label="70%" bg="dark" />
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Competences;
