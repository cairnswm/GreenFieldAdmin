import { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
  Image,
} from "react-bootstrap";
import WeatherProvider, { WeatherContext } from "../context/weatherContext";

const WeatherPage = () => {
  const [validated, setValidated] = useState(false);
  const [cityName, setCityName] = useState("");

  const {
    location,
    setLocation,
    weather,
    loading: loadingWeather,
  } = useContext(WeatherContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    console.log("City", cityName);
    setLocation(cityName);
    setValidated(true);
  };

  return (
    <div>
      <Container
        style={{
          background: "white",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
          maxWidth: "100%",
        }}
        className="p-2"
      >
        <div className="ms-3">
          <h1
            style={{
              textAlign: "left",
              fontSize: "30px",
              color: "grey",
              marginBottom: "0px",
            }}
          >
            Weather
          </h1>
          <p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
            Weather data from OpenWeatherMap
          </p>
        </div>
      </Container>
      <Container className="p-3">
        <Row>
          <Col lg={12} xl={4}>
            <Card>
              <Card.Header>Location</Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="City's name"
                      value={cityName}
                      onChange={(ev) => {
                        setCityName(ev.target.value);
                      }}
                    />
                    <Form.Text className="text-muted">Where are you?</Form.Text>
                    <Form.Control.Feedback type="invalid">
                      Your city is required to provide the weather.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card>
              <Card.Header>
                Today
                {location && weather.location ? (
                  <span>
                    {" "}
                    in {location}, {weather.location.region},{" "}
                    {weather.location.country}
                  </span>
                ) : (
                  ""
                )}
              </Card.Header>
              <Card.Body>
                {loadingWeather ? (
                  <>
                    <Spinner />
                    Loading...
                  </>
                ) : (
                  <div>
                    <Row>
                      <Col md={12} lg={4}>
                        <Image
                          className="mx-auto d-block"
                          src={weather.current.condition.icon}
                        />
                        <p center>{weather.current.condition.text}</p>
                      </Col>
                      <Col md={6} lg={4}>
                        Temperature: {weather.current.temp_c} &deg;C
                        <br />
                        Feels like: {weather.current.feelslike_c} &deg;C
                        <br />
                        Humidity: {weather.current.humidity}%
                      </Col>
                      <Col md={6} lg={4}>
                        Wind Direction: {weather.current.wind_degree} &deg; (
                        {weather.current.wind_dir})<br />
                        Wind Speed: {weather.current.wind_kph} km/h
                        <br />
                        Visibility: {weather.current.vis_km} km
                      </Col>
                    </Row>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function Weather() {
  return (
    <WeatherProvider>
      <WeatherPage />
    </WeatherProvider>
  );
}

export default Weather;
