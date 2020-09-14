import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CardPay from './Components/Payment/CardPay.js';
import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'
import CreateProduct from './Components/Product/create-product.component'
import ProductsList from './Components/Product/products-list.component'







import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'
import Details from './Components/Cart/Pdetails';
import Products from './Components/Cart/ProductDisplay';
import CreateVoucher from "./Components/Voucher/create-voucher.component";

function App() {
  return (
    <Router>
      
      <Route path="/cardPay" component={CardPay} />
      <Route exact path ="/" component={DeliveryForm}/>
      <Route path="/createProduct" component={CreateProduct} />
      <Route path="/productList" exact component={ProductsList} />


       
        <Route path="/product" component={Products}/>
        <Route path="/detail/:id" component={Details}/>

        <Route path="/voucher" component={CreateVoucher} />

      </Router>

  );
}

export default App;
