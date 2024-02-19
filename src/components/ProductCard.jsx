import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function ProductCard( product ) {
  return (
    <Col lg={2} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
