import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardProductos = ({imagen, titulo, precio}) => {
  return (
    <div>
      <Col md="6" className="my-3">
        <Card>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text> Precio: ${precio} </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardProductos;
