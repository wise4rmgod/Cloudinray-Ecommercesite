import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../components/products/Product";
import { LinkContainer } from "react-router-bootstrap";
import App from "../App";

export default function AppConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
