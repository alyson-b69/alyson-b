import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    object: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href =
      "mailto:alyson.bernabeu@gmail.com?subject=" +
      state.object +
      "&body=Je suis " +
      state.name +
      " et je vous envoie le message suivant via le formulaire du site alyson-b : " +
      state.message;

    setState({
      name: "",
      object: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <Container className="pt-5 pb-5">
        <Row className="mb-2">
          <h1>
            <FaEnvelopeOpenText className="mr-2 mb-2" />
            Prenons contact
          </h1>
          <h3 className="myColor">Besoin de plus d'informations ?</h3>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="setName">
            <Form.Label column sm="2">
              Prénom
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="name"
                placeholder="Votre prénom"
                value={state.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="setObject">
            <Form.Label column sm="2">
              Objet
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="L'objet de votre message"
                value={state.object}
                onChange={(e) => handleChange("object", e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="setMessage">
            <Form.Label column sm="2">
              Message
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Votre message"
                value={state.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </Col>
          </Form.Group>
          <Button className="bouton" variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
