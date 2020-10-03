import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import CardPay from './Components/Payment/CardPay.js';
import PaymentForm from './Components/Payment/PaymentForm.js';
import CreditDisplay from './Components/Payment/CreditDisplay.js';
import FinalPage from './Components/Payment/FinalPage.js';
import PayPal from './Components/Payment/PayPal.js';
import PayPalDisplay from './Components/Payment/PayPalDisplay.js';
import UpdateCardPay from './Components/Payment/UpdateCardPay.js';
import UpdatePayPal from './Components/Payment/UpdatePayPal.js';


import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'


function App() {
  return (
    <Router>

    
       <Route exact path="/" component={PaymentForm} />
        <Route path="/CardPay" component={CardPay} />
        <Route path="/Paypal" component={PayPal} />
        <Route path="/creditDisplay/:pin" component={CreditDisplay} />
        <Route path="/PaypalDisplay/:password" component={PayPalDisplay} />
        <Route path="/updatePayPal/:id" component={UpdatePayPal} />
        <Route path="/updateCardPay/:id" component={UpdateCardPay} />
        <Route path="/FinalPage" component={FinalPage} />
      
        <Route exact path ="/" component={DeliveryForm}/>
        
      </Router>

  );
}

export default App;
