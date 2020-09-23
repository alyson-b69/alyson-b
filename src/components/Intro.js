import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <Row>
          <Col className="col-md-12">
            <Zoom>
              <img
                src="https://feel-ink-good.com/wp-content/uploads/2020/03/avatar2-261x300.png"
                alt="alyson-b"
              />
            </Zoom>
            <RubberBand>
              <div>
                <h1>Alyson Bernabeu</h1>
                <h3>Développeuse web</h3>
              </div>
            </RubberBand>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
