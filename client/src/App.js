import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import CardPay from './Components/Payment/CardPay.js';

import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert';
import LoyaltyForm from "./Components/LoyaltyCard/Loyalty_Insert"
 import AddLoyaltyCard from "./Components/AdminCard/AddLoyaltyCard"
import ListDetails from './Components/AdminCard/ListDetails';


function App() {
  return (
    <Router>

       <Route path="cardPay/" component={CardPay} />

        <Route exact path ="/" component={DeliveryForm}/>
        <Route path="/cardReq" component={LoyaltyForm}/>
        <Route path="/cardAdd" component={AddLoyaltyCard}/>
        <Route path="/ListDetails" component={ListDetails}/>
        
      </Router>

  );
}

export default App;
