import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import { CgGlobeAlt } from "react-icons/cg";

const Footer = () => {
  return (
    <section id="footer">
      <Container as="footer" bsPrefix="foot" className="pt-4 pb-4">
        <Row>
          <Col className="col-12 col-md-1">
            <></>
          </Col>
          <Col className="col-12 col-md-3">
            <h4 className="myColor">INFORMATIONS PERSO</h4>
            <div className="text-md-left">
              <p>
                <FaMapMarkerAlt className="mr-2" />
                place Jean Macé - 69007 LYON
              </p>
              <p>
                <FaMobileAlt className="mr-2" />
                07 78 38 91 64
              </p>
              <p>
                <FaRegEnvelope className="mr-2" />
                <a href="mailto:alyson.bernabeu@gmail.com" className="myColor">
                  alyson.bernabeu@gmail.com
                </a>
              </p>
              <p>
                <CgGlobeAlt className="mr-2" />
                <a
                  href="https://www.feel-ink-good.com"
                  alt="Blog Perso Alyson"
                  title="Blog Perso Alyson"
                  className="myColor"
                >
                  Mon blog perso
                </a>
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-4">
            <h4>RETROUVEZ-MOI</h4>
            <br />
            <Row className="d-flex justify-content-around mb-5 ml-5 mr-5">
              <a
                href="https://instagram.com/alyson.b69"
                alt="instagram Alyson"
                title="instagram Alyson"
                className="myColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram fontSize="2em" />
              </a>
              <a
                href="https://github.com/alyson-b69"
                alt="GitHub Alyson"
                title="GitHub Alyson"
                className="myColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub fontSize="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/"
                alt="linkedin Alyson"
                title="linkedin Alyson"
                className="myColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin fontSize="2em" />
              </a>
              <a
                href="https://codepen.io/alysonb69"
                alt="Codepen Alyson"
                title="CodePen Alyson"
                className="myColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodepen fontSize="2em" />
              </a>
              <a
                href="https://twitter.com/feelink_good"
                alt="Twitter Alyson"
                title="Twitter Alyson"
                className="myColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter fontSize="2em" />
              </a>{" "}
            </Row>
          </Col>
          <Col className="col-12 col-md-3">
            <h4 className="mb2">INFORMATIONS</h4>
            <p>Ce site a été construit en ReactJs.</p>
          </Col>
        </Row>
        <Row>
          <Col className="mb2 mt2 lightgrey">
            © Copyright 2020 - Made with love by Alyson.B
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
