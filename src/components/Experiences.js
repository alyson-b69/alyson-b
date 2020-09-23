import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaPencilAlt, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Zoom } from "react-reveal";

const Experiences = () => {
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
              <div className="tldate">2020</div>
            </li>

            <li>
              <div className="tl-circ"></div>
              <div className="timeline-panel">
                <div className="tl-heading">
                  <h4>Formation dev web - Wild Code School</h4>
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
                <div className="tl-body">
                  <p>Projet WALLKINGART - HTML / CSS / JavaScript</p>
                  <p>
                    Projet GAMOVORE - React JS / Firebase / Styled Component
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
