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
      </Container>
    </div>
  );
}
