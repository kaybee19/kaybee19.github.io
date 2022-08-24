import React from "react";
import "./ImageContainer.scss";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ImageContainer(props) {
  const { images } = props;

  return (
    <section className="img-container">
      <Row>
        {images.map((item, i) => (
          <Col key={i}>
            <img src={item.img} alt={item.name} className="img-class" />
          </Col>
        ))}
      </Row>
    </section>
  );
}
