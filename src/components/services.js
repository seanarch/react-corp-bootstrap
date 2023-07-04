import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AppServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: "fas fa-clone",
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 2,
      icon: "fas fa-snowflake",
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 3,
      icon: "fas fa-plug",
      title: "SEO Optimized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 4,
      icon: "fas fa-desktop",
      title: "Retina Ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 5,
      icon: "fas fa-trophy",
      title: "Brower Compatibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
      id: 6,
      icon: "fas fa-life-ring",
      title: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
  ];

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {servicesData.map((service) => {
            return (
              <Col key={service.id} sm={4} className="title-holder">
                <div className="icon">
                  <i className={service.icon}></i>{" "}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AppServices;
