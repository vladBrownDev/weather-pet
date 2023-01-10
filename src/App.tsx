import React from 'react';
import './App.css';
import axios from 'axios';

import Header from "./components/Header"

function App() {
  // function getData(request:string) {
  //   const key = "e7ad131d2b0d00ed9ae9db35312ea668"
  //   let lat: number
  //   let lon: number
  //   axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${request}&limit=1&appid=${key}`)
  //     .then((res) => {
  //       lat = res.data[0].lat
  //       lon = res.data[0].lon
  //     }).then(() => {
  //       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
  //       .then((res) => {console.log(res)})
  //     })
    
  // }
  
  //getData("Zaporizhzhya")
  return (
    <>
      <Header />
      <main>
        
      </main>
    </>
  );
}

export default App;
