import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import CardPay from './Components/Payment/CardPay.js';

function App() {
  return (
    <Router>
       <Route exact path="/" component={CardPay} />
    </Router>
  );
}

export default App;
