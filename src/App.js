import React, { Component } from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

//Component Import
import Home from "./pages/Home";
import LifeInsurance from "./pages/LifeInsurance";

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Route
            exact path="/"
            component={Home}
        />  
        <Route
            exact path="/LifeInsurance"
            component={LifeInsurance}
        /> 
    </BrowserRouter>

    </>
  );
}

export default App;
