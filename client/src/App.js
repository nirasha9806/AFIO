import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'

function App() {
  return (
    <Router>
        <Route exact path ="/" component={DeliveryForm}/>
        
      </Router>
  );
}

export default App;
