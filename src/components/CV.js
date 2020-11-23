import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaRegAddressCard } from "react-icons/fa";
import { Bounce } from "react-reveal";

const CV = () => {
  return (
    <section id="cv">
      <Container className="pt-5 pb-5">
        <Row className="mb-2">
          <h1 className="text-uppercase">
            <FaRegAddressCard fontSize="1.5em" className="mr-2 mb-2" />
            Curriculum Vitae
          </h1>
          <h3 className="myColor">Mon CV au format PDF</h3>
        </Row>
        <Row className="justify-content-around mt-4">
          <a
            href="https://feel-ink-good.com/wp-content/uploads/2020/11/AlysonCV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Bounce>
              <button className="bouton">Voir le PDF</button>
            </Bounce>
          </a>
        </Row>
      </Container>
    </section>
  );
};

export default CV;
