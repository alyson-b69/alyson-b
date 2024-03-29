import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaPencilAlt, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Zoom } from "react-reveal";
import moment from 'moment';

const Experiences = () => {
  const computeDateFromNow = (date) => {
  const today = moment();
  return today.diff(moment(date), 'months');
  }

  return (
    <section id="experiences">
      <Container className="pt-5 pb-5">
        <Row className="text-center">
          <h1 className="text-uppercase myColor">
            <FaPencilAlt className="mr-2 mb-2" />
            Expériences
          </h1>
        </Row>
        <ul className="timeline">
          <Zoom>
            <li>
              <div className="tldate">2021</div>
            </li>

            <li className="timeline-inverted">
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>
                    <a
                        href="https://www.safecube.com"
                        title="safecube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <br />
                      Safecube - Développeuse web (front)
                    </a>
                  </h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      01/2021 à aujourd'hui - {computeDateFromNow(moment([2021,0,4]))} mois{" "}
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                  <p></p>
                </div>
                <div className="info">
                  Reprise du développement de l'interface utilisateur de Safecube (anciennement codée par une ESN), permettant le tracking de conteneurs en temps réel.
                  <br/>Refonte du design existant (maquettes + intégration)<br/>
                  Création d'une librairie de composants partagés.
                </div>
                <div className="tl-body">
                  <p>
                    <strong>
                      Interface{" "}
                      <a
                          href="https://app.safecube.com"
                          title="safecube interface"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Safecube
                      </a>
                    </strong>{" "}
                    - ReactJS / Redux / typeScript / Leaflet / CanvasJS
                  </p>
                  <p>
                    <strong>
                      Libraire UI{" "}
                      <a
                          href="https://safecubeui.safecube.com"
                          title="wild dev blog"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Safecube-UI
                      </a>
                    </strong>{" "}
                    - ReactJS / Storybook / Styled-components
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2020</div>
            </li>

            <li>
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>
                    <a
                      href="https://www.wildcodeschool.com/fr-FR"
                      title="wild code school"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <br />
                      Wild Code School - Formation développement web ReactJS / NodeJS
                    </a>
                  </h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      06/2020 à 12/2020 - 6 mois{" "}
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                  <p></p>
                </div>
                <div className="info">
                  Formation intensive de 6 mois pour apprendre les languages de
                  programmation web et mobile, ainsi que la gestion de projets
                  en méthodes agiles.
                </div>
                <div className="tl-body">
                  <p>
                    <strong>
                      Projet perso{" "}
                      <a
                        href="https://kitten-box.wild-dev.com"
                        title="kitten box"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        KITTEN-BOX
                      </a>
                    </strong>{" "}
                    - ReactJS / NodeJS / Socket.io / VPS
                  </p>
                  <p>
                    <strong>
                      Projet perso blog{" "}
                      <a
                        href="https://wild-dev.com"
                        title="wild dev blog"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WILD-DEV
                      </a>
                    </strong>{" "}
                    - ReactJS / Gatsby / Strapi
                  </p>
                  <p>
                    <strong>Projet SEPSIS</strong> - ReactJS / NodeJS / FHIR /
                    PostgreSQL / Azure
                  </p>
                  <p>
                    <strong>
                      Projet{" "}
                      <a
                        href="https://gamovore.netlify.app"
                        alt="gamovore"
                        title="gamovore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GAMOVORE
                      </a>
                    </strong>{" "}
                    - React JS / Firebase / Styled Component
                  </p>

                  <p>
                    <strong>
                      Projet{" "}
                      <a
                        href="https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/"
                        alt="wallkingart"
                        title="wallkingart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WALLKINGART
                      </a>
                    </strong>{" "}
                    - HTML / CSS / JavaScript
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2019</div>
            </li>

            <li className="timeline-inverted">
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Lip Intérim - Comptable</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      07/2019 à 09/2019 - 3 mois{" "}
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Comptabilité générale des filiales du groupe</p>
                  <p>
                    Mise en place de relations entre les logiciels métiers et la
                    comptabilité
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Restalliance - Comptable</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      09/2018 à 06/2019 - 10 mois
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Comptabilité filiale COGEREST & Cuisines centrales</p>
                  <p>Participation à la migration CEGID</p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2018</div>
            </li>

            <li className="timeline-inverted">
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Carré d'Or Immobilier - Comptable</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      10/2015 à 09/2018 - 3 ans
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Comptabilité multisociétés.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2015</div>
            </li>

            <li>
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Mutualité Sociale Agricole - Comptable</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      03/2014 à 09/2015 - 1 an et 7 mois
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Bourg-en-Bresse (01)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Comptabilité fournisseurs</p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2014</div>
            </li>

            <li className="timeline-inverted">
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Adapei de l'Ain - Assistante Comptable</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      10/2013 à 02/2014 - 5 mois
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Villard-Les-Dombes (01)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Intérim.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2013</div>
            </li>

            <li>
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Hertz LSA - Comptable alternance</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      08/2012 à 08/2013 - 1 an et 1 mois
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Viriat (01)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Comptabilité clients</p>
                </div>
              </div>
            </li>

            <li>
              <div className="tldate">2012</div>
            </li>

            <li className="timeline-inverted">
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Ekylis - Comptable Alternance</h4>
                  <p>
                    <small className="text-muted">
                      <FaRegCalendarAlt className="mr-2" />
                      08/2011 à 07/2012 - 1 an
                      <FaMapMarkerAlt className="ml-2 mr-2" />
                      Lyon (69)
                    </small>
                  </p>
                </div>
                <div className="tl-body">
                  <p>Gestion d'un portefeuille de 5 clients</p>
                </div>
              </div>
            </li>
          </Zoom>
        </ul>
      </Container>
    </section>
  );
};

export default Experiences;
