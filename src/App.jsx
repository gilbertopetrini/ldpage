import Principal from './Principal';
import Orlando from './orlando';
import Mantovano from './mantovano';
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <Principal />}/>
        <Route path="/Orlando" element={ <Orlando />}/>
        <Route path="/Mantovano" element={ <Mantovano />}/>
      </Routes>
  );
}

export default App;

