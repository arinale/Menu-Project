import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
export const ItemsList = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex  flex-row"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <Card.Img
            variant="top"
            className="img-item"
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>
              <div className="d-flex  justify-content-between">
                <div className="item-title">وجبة افطار </div>
                <div className="item-price">50 &#8362; </div>
              </div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </div>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
