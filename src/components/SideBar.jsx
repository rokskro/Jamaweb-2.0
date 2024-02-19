import React from "react";
import { Card, Form, Collapse, Col } from "react-bootstrap";

export default function SideBar() {

  return (
    <Col className="sidebar-column ms-3">
      <Card>
        
        <Card.Header>
          Product Type
        </Card.Header>
        <Card.Body>
          <Card.Text>Men's Clothing</Card.Text>
          <Card.Text>Women's Clothing</Card.Text>
          <Card.Text>Electronic</Card.Text>
          <Card.Text>Household</Card.Text>
        </Card.Body>

      </Card>
    </Col>
  );
}
