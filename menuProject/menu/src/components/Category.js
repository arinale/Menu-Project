import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Category = () => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            {" "}
            הכל
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            ארוחת בוקר
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            {" "}
            ארוחת צהרים{" "}
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            {" "}
            ארוחת ערב
          </button>
        </div>
      </Col>
    </Row>
  );
};
