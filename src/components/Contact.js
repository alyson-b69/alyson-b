import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";
import transporter from "../../config";

const dotenv = require("dotenv");
dotenv.config();

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailOptions = {
      from: state.email,
      to: process.env.EMAIL,
      subject: state.subject,
      html:
        state.name +
        " (" +
        state.email +
        ") " +
        " send this message : " +
        state.message,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: "ok",
        });
      }
    });
    // axios
    //   .post("/send", { ...state })
    //   .then((response) => {
    //     console.log(response);
    //     setResult(response.data);
    //     setState({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setResult({
    //       success: false,
    //       message: "There is a probleme on axios request",
    //     });
    //   });
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
                type="text"
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
