import {useEffect,useState} from 'react';
import './App.css'; 

import Navbar from './components/Navbar';
import Restaurant from './components/Abby/Restaurant';

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
    </div>
  );
}

export default App;