import React from "react";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SideBar from "./SideBar";
import Col from "react-bootstrap/Col";

export default function Products() {
  const productsData = [
    {
      id: 1,
      name: "Fish",
      price: 40,
      description: "Fishy fish",
    },
    {
      id: 2,
      name: "Jambon",
      price: 15,
      description: "Jammy jambon",
    },
    {
      id: 3,
      name: "Friend",
      price: 100,
      description: "Friendly friend",
    },
    {
      id: 4,
      name: "Iceberg",
      price: 1500,
      description: "Icy iceburg",
    },
    {
      id: 5,
      name: "Banana",
      price: 1,
      description: "Zingy Banana",
    },
    {
      id: 6,
      name: "Chocolate",
      price: 2,
      description: "Milky chocolate 5% cocoa",
    },
    {
      id: 7,
      name: "Pyjamas",
      price: 20,
      description: "Sezty pyjamas made with 1% cotton",
    },
  ];

  const productsToDisplay = productsData.map((product) => {
    return <ProductCard key={product.id} {...product} />;
  });

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <SideBar />
        </Col>
        <Col>
          <Row className="me-3">{productsToDisplay}</Row>
        </Col>
      </Row>
    </Container>
  );
}
