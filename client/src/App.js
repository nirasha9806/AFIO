import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import CardPay from './Components/Payment/CardPay.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'


function App() {
  return (
    <Router>

       <Route exact path="/" component={CardPay} />

        <Route exact path ="/" component={DeliveryForm}/>
        
      </Router>

  );
}

export default App;
