import React from "react";

import Header from "./Header";
import WeatherDescription from "./WeatherDescription";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast";
import "./App.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Header />
          <WeatherDescription />
          <hr />
          <CurrentTemperature />
          <Forecast />
        </Card>
        <span>
          <a
            href="https://github.com/macarenagimenez/react-app-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Macu Gimenez
        </span>
      </Container>
    </div>
  );
}
