import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const AppContact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your contact number"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.72557665635!2d-114.4181533641176!3d51.027589632391916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1688577788238!5m2!1sen!2sca"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              123-456-7890
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Calgary, AB
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AppContact;
