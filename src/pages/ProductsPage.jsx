import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import Row from 'react-bootstrap/Row'
export default function ProductsPage() {
  return (
    <Row>
      <ProductList />
    </Row>
  );
}
