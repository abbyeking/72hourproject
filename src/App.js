import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Jeremy/NASA.css';// This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'
import Nasa from "./components/Jeremy/NASA";


// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [geoLoc, setGeoLoc] = useState({});

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(setLoc);
  }, []);


  const setLoc = (position) => {
    setGeoLoc({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

    console.log(position.coords.latitude, position.coords.longitude);
  }

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <Nasa geoLoc={geoLoc} />
    </div>
  );
}

// Makes our Component available for import
export default App;