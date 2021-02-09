import {useEffect,useState} from 'react';
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'


import OpenWeather from './components/Jonny/weather';

// Defining our <App /> component the function name matches the file name
function App() {

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
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />


      <OpenWeather pos={pos}/>
    </div>
  );
}

// Makes our Component available for import
export default App;