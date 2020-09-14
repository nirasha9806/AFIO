import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CardPay from './Components/Payment/CardPay.js';

import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'

function App() {
  return (
    <Router>

       <Route path="/cardPay" component={CardPay} />
        <Route exact path ="/" component={DeliveryForm}/>
        
      </Router>
  );
}

export default App;
