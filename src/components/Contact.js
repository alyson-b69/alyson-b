import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://alysonb-contact.herokuapp.com/send-email", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Votre message a été envoyé !");
      })
      .catch((err) => {
        setResult({
          success: false,
          message: "There is a probleme on axios request",
        });
        console.log(result);
        console.log(err);
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
          <h3 className="myColor">Besoin de plus d'infos ?</h3>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="name"
                type="text"
                placeholder="Votre prénom"
                value={state.name}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="email"
                type="email"
                placeholder="Votre email"
                value={state.email}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="subject">
            <Form.Label column sm="2">
              Objet
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="subject"
                type="text"
                placeholder="L'objet de votre message"
                value={state.subject}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="message">
            <Form.Label column sm="2">
              Message
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="message"
                as="textarea"
                rows="3"
                placeholder="Votre message"
                value={state.message}
                onChange={inputChange}
                required
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
