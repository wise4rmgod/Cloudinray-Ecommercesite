import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/footer";
import spash from "../images/spash.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const [productState, setProductState] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://node-cloudcommerce.herokuapp.com/productData/${productId}`)
      .then((response) => {
        setProductState(response.data);
        setLoading(false);
      });
  }, [productId]);
  return (
    <div>
      {/* {loading && (
        <Spinner
          animation="border"
          variant="dark"
          style={{ alignItem: "center", margin: "auto" }}
        />
      )} */}
      {productState === null ? (
        <div>
          {" "}
          <Spinner
            animation="border"
            variant="dark"
            style={{ alignItem: "center", margin: "auto" }}
          />
        </div>
      ) : (
        <Container
          id="contain"
          bg="dark"
          variant="dark"
          key={productState.productDetails}>
          <Row>
            <Col sm={6}>
              <Card>
                {productState.image.includes("image") ? (
                  <Card.Img
                    variant="top"
                    src={productState.image}
                    style={{
                      maxWidth: "635px",

                      maxHeight: "570px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div>
                    <iframe
                      width="543"
                      height="570"
                      src={productState.image}
                      frameborder="0"
                      allowfullscreen></iframe>
                  </div>
                )}
              </Card>
            </Col>
            <Col sm={6}>
              <ListGroup style={{ marginBottom: "20px" }}>
                <ListGroup.Item
                  style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {productState.title}
                </ListGroup.Item>
                <ListGroup.Item>{productState.content}</ListGroup.Item>
                <ListGroup.Item>{productState.price}</ListGroup.Item>
              </ListGroup>
              <Button
                variant="dark"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "150px",
                  textAlign: "center",
                }}>
                Add To Cart
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default Product;
