import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";
import { Fade } from "react-reveal";

const Education = () => {
  return (
    <section id="education">
      <Container className="pt-5 pb-5">
        <Row className="mb-2">
          <h1 className="text-uppercase">
            <FaGraduationCap fontSize="1.5em" className="mr-2 mb-2" />
            éducation
          </h1>
          <h3 className="myColor">Diplômes & formations</h3>
        </Row>
        <Row>
          <Col className="col-md-12">
            <Fade right>
              <Row className="education mb-3">
                <Col className="col-8 details content pt-2">
                  <Row>
                    <h2 className="section-subtitle">
                      Titre Developpeur Web & Mobiles
                    </h2>
                  </Row>
                  <Row className="justify-content-center">
                    <p>
                      <a
                        href="https://www.wildcodeschool.com/fr-FR"
                        title="Wild code school"
                        alt="Wild Code School"
                      >
                        Wild Code School
                      </a>
                    </p>
                  </Row>
                </Col>
                <Col className="col-3 year ">
                  <br />
                  <h2 className="section-subtitle">2020</h2>
                </Col>
              </Row>

              <Row className="education mb-3 pl-2">
                <Col className="col-3 year">
                  <br />
                  <h2 className="section-subtitle">2013</h2>
                </Col>
                <Col className="col-8 details content mr-0 pt-2">
                  <Row>
                    <h2 className="section-subtitle">BTS Comptabilité</h2>
                  </Row>
                  <Row className="justify-content-center">
                    <p>
                      <a
                        href="https://www.sciences-u-lyon.fr/"
                        title="Sciences u"
                        alt="Sciences u"
                      >
                        Sciences U
                      </a>
                    </p>
                  </Row>
                </Col>
              </Row>

              <Row className="education mb-3">
                <Col className="col-8 details content pt-2">
                  <Row>
                    <h2 className="section-subtitle">Bac pro Comptabilité</h2>
                  </Row>
                  <Row className="justify-content-center">
                    <p>
                      <a
                        href="https://st-charles.eu/lycee-professionnel/"
                        title="Lycée St-Charles"
                        alt="Lycée St-Charles"
                      >
                        Lycée St-Charles
                      </a>
                    </p>
                  </Row>
                </Col>
                <Col className="col-3 year">
                  <br />
                  <h2 className="section-subtitle">2011</h2>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
