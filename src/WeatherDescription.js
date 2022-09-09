import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WeatherDescription.css";

export default function WeatherDescription() {
  return (
    <Row className="weatherDescription">
      <Col>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
        <span>Clouds</span>
      </Col>
      <Col>
        <FontAwesomeIcon icon={faWind} className="icon" />
        <p>20 km/h</p>
      </Col>
      <Col>
        <FontAwesomeIcon icon={faCloudRain} className="icon" />
        <p>30%</p>
      </Col>
    </Row>
  );
}
