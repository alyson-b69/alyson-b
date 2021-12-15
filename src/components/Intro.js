import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import Avatar from '../img/avatar.png';

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <Row>
          <Col className="col-md-12">
            <Zoom>
              <img
                src={Avatar}
                alt="alyson-b"
              />
            </Zoom>
            <RubberBand>
              <div>
                <h1>Alyson Bernabeu</h1>
                <h3>Développeuse web ReactJS / NodeJS</h3>
              </div>
            </RubberBand>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
