// import { useEffect, useState } from "react";

// import "./NASA.css";

// const Nasa = () => {
//   const [data, setData] = useState();

//   const url = `https://api.nasa.gov/planetary/earth/imagery?lat=${data.latitude}&lon=${data.longitude}&${date}&api_key=P0MkBcEQsjdw6xfNvmABK2c1OS2PpusY4PGSGkty`;

//   const initData = async () => {
//     const response = await fetch(url);
//     const nasa = await response.json();

//     console.log(nasa);

//     setData(nasa);
//   };

//   useEffect(() => {
//     initData();
//   }, [url]);

//     console.log(data);

//   return ( 
//     <div className="main">
//         <div className="mainDiv">
//             <h1>NASA</h1>
//         </div>
//     </div>
//   );
// };

// export default Nasa;
import React from 'react';

const Nasa = (props) => {

    
    const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
    const key = 'P0MkBcEQsjdw6xfNvmABK2c1OS2PpusY4PGSGkty';
    const date = "2021-02-07";
    const longitude = Math.round(props.longitude * 100) / 100;
    const latitude = Math.round(props.latitude * 100) / 100;
    const dim = .10;
    
    const url = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${key}`;
    
    console.log(`NASA API url: ${url}`)

    return ( 
        <>
        <p>Hello from NASA!</p>
        {latitude ? <span>{`Latitude is: ${props.latitude}`}</span> : <span>{`Latitude is: Locating...`}</span>}
        <br />
        {longitude ? <span>{`Longitude is: ${props.longitude}`}</span>: <span>{`Longitude is: Locating...`}</span>}
        <br />
        {longitude ? <img src={url} width="300" /> : <></>}
        </>
     );
}
 
export default Nasa;