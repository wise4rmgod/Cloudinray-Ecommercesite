import React, { useEffect, useState } from "react";
import { Container, Card, CardGroup, Row, Col, Spinner } from "react-bootstrap";
import "./layout.css";

import axios from "axios";
import { Link } from "react-router-dom";

function Layout() {
  const [productState, setProductState] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://node-cloudcommerce.herokuapp.com/productData")
      .then((response) => {
        setProductState(response.data);
        setLoading(false);
      });
  }, []);
  //  useEffect(() => {
  //    axios
  //      .get("http://localhost:3003/productData")
  //      .then((response) => {
  //        setProductState(response.data);
  //        setLoading(false);
  //      });
  //  }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://node-cloudcommerce.herokuapp.com/productData")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {loading && (
            <Spinner
              animation="border"
              variant="dark"
              style={{ alignItem: "center", margin: "auto" }}
            />
          )}
          {productState === null ? (
            <div></div>
          ) : (
            productState.map((item, index) => (
              <Col key={`${item.id}${index}`}>
                <Card>
                  <Link to={`/${item.id}`}>
                    {item.image.includes("image") ? (
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt="shoe"
                        style={{
                          maxWidth: "415px",
                          maxHeight: "350px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <video
                        className="videoset"
                        // width="353"
                        // height="350"
                        controls
                        src={item.image}
                        type="video/mp4">
                        Your browser does not support HTML video.
                      </video>
                      // <iframe
                      //   width="353"
                      //   height="350"
                      //   src={item.image}
                      //   frameborder="0"
                      //   allowfullscreen></iframe>
                    )}
                  </Link>

                  <Card.Body>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.product}</Card.Text>
                      <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* <Col>
                <Card>
                  <Card.Img variant="top" src={showe} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={showe} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col> */}
      {/* ))} */}
    </div>
  );
}
export default Layout;
