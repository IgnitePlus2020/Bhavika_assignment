import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from './Navbar';
import {  Route } from "react-router-dom";
import FormsAndInputs from './Components/FormsAndInputs';



function App() {
  return (
    <div className="App">
        <Navbar /> <FormsAndInputs />

    </div>
    
  );
}

export default App;