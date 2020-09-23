import React from "react";
import { Container, Tabs, Tab, Row, Col, Image } from "react-bootstrap";
import { FaRegCalendarAlt, FaRegFolderOpen } from "react-icons/fa";
import gamovore from "../img/gamovore.png";
import wallkingart from "../img/wallkingart.png";
import alysonb from "../img/alyson-b.png";
import techwatch from "../img/techwatch.png";
import liora from "../img/liora.png";
import feelinkgood from "../img/feelinkgood.png";
import { Zoom } from "react-reveal";

const Portefolio = () => {
  return (
    <section id="portefolio">
      <Container className="pt-5 pb-5">
        <Row className="text-center">
          <h1 className="text-uppercase myColor">
            <FaRegFolderOpen fontSize="1.5em" className="mr-2 mb-2" />
            Portefolio
          </h1>
        </Row>
        <Tabs defaultActiveKey="tous" id="uncontrolled-tab-example">
          <Tab eventKey="tous" title="Tous">
            <h3 className="mt-2 mb-2 ml-2 mr-2 myColor">Tous mes projets</h3>
            <Zoom>
              <Row className="mb-3">
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://alyson-b.netlify.app"
                    alt="alyson-b"
                    title="alyson-b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        src={alysonb}
                        alt="alyson-b"
                        title="alyson-b"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Mon site CV, dans le but de trouver un stage.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Mon blog CV </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Septembre 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://gamovore.netlify.app"
                    alt="gamovore"
                    title="gamovore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={gamovore}
                        alt="gamovore"
                        title="gamovore"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site React pour mettre en relation des gamers
                          désireux de trouver de nouveaux partenaires de jeux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Gamovore </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Juil. Août 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://techwatch-react.netlify.app"
                    alt="techwatch"
                    title="techwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={techwatch}
                        alt="techwatch"
                        title="techwatch"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site pour présenter React à nos camarades traitant
                          sur l'organisation d'un projet et une introduction à
                          Redux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Techwatch </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Juil 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/"
                    alt="wallkingart"
                    title="wallkingart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={wallkingart}
                        alt="wallkingart"
                        title="wallkingart"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Premier projet au sein de la Wild. Un site web
                          répertoriant des street artistes, avec une page de
                          détails et une gallerie pour chacun d'entre eux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Wall King Art </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Mai juin 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://liorapictures.site/"
                    alt="liorapictures"
                    title="liorapictures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={liora}
                        alt="liorapictures"
                        title="liorapictures"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site sous wordpress. Charte graphique et logo,
                          thème personnalisé, gestion du contenu.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Liora Pictures</strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Mars 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://feel-ink-good.com/"
                    alt="feel-ink-good"
                    title="feel-ink-good"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={feelinkgood}
                        alt="feel-ink-good"
                        title="feel-ink-good"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Mon blog sous wordpress. Charte graphique et logo,
                          thème personnalisé, gestion du contenu.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Feel Ink Good</strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Février 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            </Zoom>
          </Tab>
          <Tab eventKey="groupe" title="Projets de Groupe">
            <h3 className="mt-2 mb-2 ml-2 mr-2 myColor">
              Mes projets réalisés en groupe
            </h3>
            <Zoom>
              <Row>
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://gamovore.netlify.app"
                    alt="gamovore"
                    title="gamovore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={gamovore}
                        alt="gamovore"
                        title="gamovore"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site React pour mettre en relation des gamers
                          désireux de trouver de nouveaux partenaires de jeux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Gamovore </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Juil. Août 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://techwatch-react.netlify.app"
                    alt="techwatch"
                    title="techwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={techwatch}
                        alt="techwatch"
                        title="techwatch"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site pour présenter React à nos camarades traitant
                          sur l'organisation d'un projet et une introduction à
                          Redux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Techwatch </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Juil 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/"
                    alt="wallkingart"
                    title="wallkingart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={wallkingart}
                        alt="wallkingart"
                        title="wallkingart"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Premier projet au sein de la Wild. Un site web
                          répertoriant des street artistes, avec une page de
                          détails et une gallerie pour chacun d'entre eux.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Wall King Art </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Mai juin 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            </Zoom>
          </Tab>
          <Tab eventKey="solo" title="Projets solo">
            <h3 className="mt-2 mb-2 ml-2 mr-2 myColor">
              Mes projets réalisés en solo
            </h3>
            <Zoom>
              <Row>
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://alyson-b.netlify.app"
                    alt="alyson-b"
                    title="alyson-b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        src={alysonb}
                        alt="alyson-b"
                        title="alyson-b"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Mon site CV, dans le but de trouver un stage.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Mon blog CV </strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Septembre 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://liorapictures.site/"
                    alt="liorapictures"
                    title="liorapictures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={liora}
                        alt="liorapictures"
                        title="liorapictures"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Un site sous wordpress. Charte graphique et logo,
                          thème personnalisé, gestion du contenu.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Liora Pictures</strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Mars 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>

                <Col className="col-12 col-md-4 myColor">
                  <a
                    href="https://feel-ink-good.com/"
                    alt="feel-ink-good"
                    title="feel-ink-good"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="box">
                      <Image
                        fluid
                        rounded
                        thumbnail
                        src={feelinkgood}
                        alt="feel-ink-good"
                        title="feel-ink-good"
                        with="100%"
                      />
                      <div className="box-content">
                        <p className="text-justify">
                          Mon blog sous wordpress. Charte graphique et logo,
                          thème personnalisé, gestion du contenu.
                        </p>
                      </div>
                      <div className="icon inline-block">
                        <strong>Feel Ink Good</strong>
                        <small className="ml-2">
                          <FaRegCalendarAlt /> Février 2020
                        </small>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            </Zoom>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Portefolio;
