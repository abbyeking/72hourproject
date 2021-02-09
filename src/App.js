import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Jeremy/NASA.css';// This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'
import Nasa from "./components/Jeremy/NASA";
import Restaurant from './components/Abby/Restaurant';
import OpenWeather from './components/Jonny/weather';


const App = () => {

  const [pos, setPos] = useState({lat: 0, long: 0});
  const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords)
      } else {
        alert('GeoLocation disabled');
      }
    }
  const getCoords = (position) => {
      console.log(position)
      setPos({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    }

    useEffect(() => {
      getLocation();
    }, [])

  return ( 
    <div className="App"> 
      <Navbar />
      <Restaurant pos={pos} />
      <Nasa geoLoc={pos} />
      <OpenWeather pos={pos}/>
    </div>
  );
}

export default App;