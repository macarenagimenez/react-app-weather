import React from "react";
import "./Daily.css";
import Col from "react-bootstrap/Col";
export default function Daily() {
  return (
    <Col>
      <div>
        <p className="weeksDays">Mon</p>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
        <p>27°- 15°</p>
      </div>
    </Col>
  );
}
