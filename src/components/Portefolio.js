import React from "react";
import { Container, Tabs, Tab, Row, Col, Image } from "react-bootstrap";
import { FaRegFolderOpen } from "react-icons/fa";
import gamovore from "../img/gamovore.png";
import wallkingart from "../img/wallkingart.png";
import alysonb from "../img/alyson-b.png";
import techwatch from "../img/techwatch.png";
import liora from "../img/liora.png";
import feelinkgood from "../img/feelinkgood.png";

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
            <Row>
              <Col className="col-12 col-md-4">
                <a
                  href="https://alyson-b.netlify.app"
                  alt="alyson-b"
                  title="alyson-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={alysonb}
                    alt="alyson-b"
                    title="alyson-b"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Mon site CV</h5>
                  <small>Septembre 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Mon site CV, dans le but de trouver un stage. Ce site a été
                    codé en ReactJS à l'aide du framework bootstrap.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://gamovore.netlify.app"
                  alt="gamovore"
                  title="gamovore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={gamovore}
                    alt="gamovore"
                    title="gamovore"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Projet React JS</h5>
                  <small>Juillet à Août 2020</small>
                  <br />
                  <small>5 devs</small>
                  <p className="text-justify">
                    Une App pour mettre en relation des gamers désireux de
                    trouver de nouveaux joueurs pour un jeu précis, une
                    plateforme, un mode de jeu etc...
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://techwatch-react.netlify.app"
                  alt="techwatch"
                  title="techwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={techwatch}
                    alt="techwatch"
                    title="techwatch"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Techwatch React</h5>
                  <small>Juillet 2020</small>
                  <br />
                  <small>2 devs</small>
                  <p className="text-justify">
                    Une App co-codée avec Guillaume pour présenter React à nos
                    camarades traitant sur l'organisation d'un projet et une
                    introduction à Redux.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-md-4">
                <a
                  href="https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/"
                  alt="wallkingart"
                  title="wallkingart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={wallkingart}
                    alt="wallkingart"
                    title="wallkingart"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Projet HTML/CSS/JS</h5>
                  <small>Mai à juin 2020</small>
                  <br />
                  <small>3 devs</small>
                  <p>
                    Premier projet au sein de la Wild. Un site web répertoriant
                    des street artistes, avec une page de détails et une
                    gallerie pour chacun d'entre eux.
                  </p>
                </div>
              </Col>

              <Col className="col-12 col-md-4">
                <a
                  href="https://liorapictures.site/"
                  alt="liorapictures"
                  title="liorapictures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={liora}
                    alt="liorapictures"
                    title="liorapictures"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Liora Pictures</h5>
                  <small>Mars 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Un site sous wordpress pour une photographe. Création de la
                    charte graphique et du logo, adaptation et personnalisation
                    du thème Wordpress, gestion du contenu.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://feel-ink-good.com/"
                  alt="feel-ink-good"
                  title="feel-ink-good"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={feelinkgood}
                    alt="feel-ink-good"
                    title="feel-ink-good"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Feel Ink Good</h5>
                  <small>Février 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Mon blog perso sous wordpress. Création de la charte
                    graphique et du logo, children thème Wordpress. Je n'ai
                    malheureusement plus le temps de créer du contenu.
                  </p>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="groupe" title="Projets de Groupe">
            <h3 className="mt-2 mb-2 ml-2 mr-2 myColor">
              Mes projets réalisés en groupe
            </h3>
            <Row>
              <Col className="col-12 col-md-4">
                <a
                  href="https://gamovore.netlify.app"
                  alt="gamovore"
                  title="gamovore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={gamovore}
                    alt="gamovore"
                    title="gamovore"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Projet React JS</h5>
                  <small>Juillet à Août 2020</small>
                  <br />
                  <small>5 devs</small>
                  <p className="text-justify">
                    Une App pour mettre en relation des gamers désireux de
                    trouver de nouveaux joueurs pour un jeu précis, une
                    plateforme, un mode de jeu etc...
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://techwatch-react.netlify.app"
                  alt="techwatch"
                  title="techwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={techwatch}
                    alt="techwatch"
                    title="techwatch"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Techwatch React</h5>
                  <small>Juillet 2020</small>
                  <br />
                  <small>2 devs</small>
                  <p className="text-justify">
                    Une App co-codée avec Guillaume pour présenter React à nos
                    camarades traitant sur l'organisation d'un projet et une
                    introduction à Redux.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/"
                  alt="wallkingart"
                  title="wallkingart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={wallkingart}
                    alt="wallkingart"
                    title="wallkingart"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Projet HTML/CSS/JS</h5>
                  <small>Mai à juin 2020</small>
                  <br />
                  <small>3 devs</small>
                  <p>
                    Premier projet au sein de la Wild. Un site web répertoriant
                    des street artistes, avec une page de détails et une
                    gallerie pour chacun d'entre eux.
                  </p>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="solo" title="Projets solo">
            <h3 className="mt-2 mb-2 ml-2 mr-2 myColor">
              Mes projets réalisés en solo
            </h3>
            <Row>
              <Col className="col-12 col-md-4">
                <a
                  href="https://alyson-b.netlify.app"
                  alt="alyson-b"
                  title="alyson-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={alysonb}
                    alt="alyson-b"
                    title="alyson-b"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Mon site CV</h5>
                  <small>Septembre 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Mon site CV, dans le but de trouver un stage. Ce site a été
                    codé en ReactJS à l'aide du framework bootstrap.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://liorapictures.site/"
                  alt="liorapictures"
                  title="liorapictures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={liora}
                    alt="liorapictures"
                    title="liorapictures"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Liora Pictures</h5>
                  <small>Mars 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Un site sous wordpress pour une photographe. Création de la
                    charte graphique et du logo, adaptation et personnalisation
                    du thème Wordpress, gestion du contenu.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-4">
                <a
                  href="https://feel-ink-good.com/"
                  alt="feel-ink-good"
                  title="feel-ink-good"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    rounded
                    thumbnail
                    src={feelinkgood}
                    alt="feel-ink-good"
                    title="feel-ink-good"
                    with="100%"
                  />
                </a>
                <div className="text-center mt-2">
                  <h5>Feel Ink Good</h5>
                  <small>Février 2020</small>
                  <br />
                  <small>Solo</small>
                  <p className="text-justify">
                    Mon blog perso sous wordpress. Création de la charte
                    graphique et du logo, children thème Wordpress. Je n'ai
                    malheureusement plus le temps de créer du contenu.
                  </p>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Portefolio;
