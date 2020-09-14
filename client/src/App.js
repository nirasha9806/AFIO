import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CardPay from './Components/Payment/CardPay.js';
import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'
import CreateProduct from './Components/Product/create-product.component'
import ProductsList from './Components/Product/products-list.component'



function App() {
  return (
    <Router>
      
      <Route path="/cardPay" component={CardPay} />
      <Route exact path ="/" component={DeliveryForm}/>
      <Route path="/createProduct" component={CreateProduct} />
      <Route path="/productList" exact component={ProductsList} />
        
      </Router>

  );
}

export default App;
