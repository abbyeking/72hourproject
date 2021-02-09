//ITERATION 1 - doesn't work

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

//ITERATION 2 - still doesn't work
// Math.round(props.longitude * 100) / 100;
// Math.round(props.latitude * 100) / 100;
// import React from 'react';

// const Nasa = (props) => {

    
//     const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
//     const key = 'P0MkBcEQsjdw6xfNvmABK2c1OS2PpusY4PGSGkty';
//     const date = "2020-10-10";
//     const longitude = "86.1581";
//     const latitude = "39.7684";
//     const dim = .15;
    
//     const url = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${key}`;
    
//     console.log(`NASA API url: ${url}`);

//     return ( 
//         <>
//         <p>Hello from NASA!</p>
//         {latitude ? <span>{`Latitude is: ${props.latitude}`}</span> : <span>{`Latitude is: Locating...`}</span>}
//         <br />
//         {longitude ? <span>{`Longitude is: ${props.longitude}`}</span>: <span>{`Longitude is: Locating...`}</span>}
//         <br />
//         {longitude ? <img src={url} width="300" /> : <></>}
//         </>
//      );
// }
 
// export default Nasa;

//ITERATION THREE - still not working
// import { useState,useEffect } from "react";
// const Nasa=(props)=>{
//   const base_url="https://api.nasa.gov/planetary/earth/imagery";
//   const api_key="P0MkBcEQsjdw6xfNvmABK2c1OS2PpusY4PGSGkty"
//   let d = new Date();
//   const YYYY=d.getFullYear()-1;
//   const MM=d.getMonth()+1<10?`0${d.getMonth()+1}`:`${d.getMonth()+1}`;
//   const DD=d.getDate()<10?`0${d.getDate()}`:`${d.getDate()}`;
//   const date=YYYY+"-"+MM+"-"+DD;
//   console.log(props);
//   const [image,setImage]=useState("");
//   useEffect(()=>{
//         const fetchImage = async()=>{
//         let lon=await props.location.longitude;
//         let lat=await props.location.latitude;
//         setImage(`${base_url}?lon=${lon}&lat=${props.location.latitude}&date=${date}&dim=0.15&api_key=${api_key}`);
//       }
//       fetchImage();
//     },[])  
//   return(
//       <div className="nasa">
//           <h1>{props.location.city}, {props.location.region} one year ago today:</h1>
//           <p>(Image is from one year ago to ensure an image exists)</p>
//           <img src={props.url}/>
//       </div>
//   )
// }
// export default Nasa;

//ITERATION FOUR
import React, { useEffect, useState } from "react";
import './NASA.css'; 
const key = "P0MkBcEQsjdw6xfNvmABK2c1OS2PpusY4PGSGkty";
const base_url = "https://api.nasa.gov/planetary/earth/assets";

const Nasa = () => {
  const [photoData, setPhotoData] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      fetch(
        `${base_url}?lon=${long}&lat=${lat}&date=2018-02-01&&dim=.25&api_key=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPhotoData(data.url);
        });
    });
  }, []);

  return (
    <div className="main">
      <div>
        <h1><span class="G1">G</span> 
        <span class="e1">o</span> 
        <span class="e2">o</span> 
        <span class="k1">g</span> 
        <span class="s1">l</span> 
        <span class="f">e</span> 
        <span class="o">S</span> 
        <span class="r">a</span> 
        <span class="G2">t</span> 
        <span class="e3">e</span> 
        <span class="e4">l</span> 
        <span class="k2">l</span> 
        <span class="s2">i</span>
        <span class="t2">t</span> 
        <span class="v2">e</span>
        <span class="x2">!</span>
        {/* Google Satellite View Of Your Present Location */}
        </h1>
        <img className="circle" width="400" src={photoData} alt="NASA satellite image" />
        <h2>(View Of Your Present Location)</h2>
      </div>
    </div>
  );
};

export default Nasa;