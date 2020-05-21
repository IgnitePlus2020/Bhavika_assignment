import React from 'react';
import logo from './logo.svg';
import './App.css';
import *  as ReactBootStrap from 'react-bootstrap';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Switch ,Route } from "react-router-dom";
import FictionContent from './Components/content/FictionContent';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Switch>
<div className= "header">
            <Route path="/FictionContent" component={FictionContent}/>

</div>
</Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;