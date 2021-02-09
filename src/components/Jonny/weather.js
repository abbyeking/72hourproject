import React, { useState, useEffect } from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';
import "./weather.css"

const OpenWeather = ({pos}) => {
  const [forecast, setForecast] = useState([]);
  const [fahrenheit, setFahrenheit] = useState([]);
  const [celsius, setCelsius] = useState("");
  const [temp, setTemp] = useState('');
  const [showFahrenheit, setShowFahrenheit] = useState (true);
  const apiKey = "f257276336ea1a7b04de8d8dc11ad341";


  useEffect(() => {
    fetcher();
    fetcherTwo();
  }, [pos.lat, pos.long]);

  const fetcher = () => {
    console.log("Hello");
    console.log("Howdy");
    console.log("Meowdy");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.long}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setForecast(json.weather[0].main);
        setFahrenheit(json.main.temp);
      });
  };


  const fetcherTwo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.long}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCelsius(json.main.temp);
      });
  };

  function handleToggle () {
            setShowFahrenheit(!showFahrenheit)
            showFahrenheit ? setTemp (fahrenheit) : setTemp (celsius)
        }

  return (
    <div>
      <Card id="weather" body inverse sm="8" style={{ width: "350px", backgroundColor: "LightBlue"}}>

        <CardImg width="100%" height="100%" src="https://images.unsplash.com/photo-1591345046185-5e8df80dd74c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Card image cap" />

        <CardBody>
          <CardTitle tag="h5">Today's Weather</CardTitle>
          <CardText>{forecast}</CardText> 
          <CardText>{temp}</CardText>     
          <CardText> 
                <Button outline color="warning" onClick={handleToggle}>
                { !showFahrenheit ? "Celsius" : "Fahrenheit" }
                </Button>
        </CardText>
        </CardBody>

      </Card>
    </div>
  );
};


export default OpenWeather;