import React from "react";
import Daily from "./Daily.js";
import Row from "react-bootstrap/Row";

export default function Forecast() {
  return (
    <Row>
      <Daily />
      <Daily />
      <Daily />
      <Daily />
    </Row>
  );
}
