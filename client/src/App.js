import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Auth from "./hoc/auth";

import CardPay from './Components/Payment/CardPay.js';
import CreateProduct from './Components/Product/create-product.component'
import ProductsList from './Components/Product/products-list.component'
import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert';
import LoyaltyForm from "./Components/LoyaltyCard/Loyalty_Insert"
import AddLoyaltyCard from "./Components/AdminCard/AddLoyaltyCard"
import ListDetails from './Components/AdminCard/ListDetails';

import HomePage from "./Components/LandingPage/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import LoginPage from "./Components/LoginPage/LoginPage.js";
import RegisterPage from "./Components/RegisterPage/RegisterPage.js";

import UploadCategoryPage from './Components/Category/UploadCategoryPage';
import viewDetails from './Components/AdminProfilePage/viewDetails';
import UserDetails from './Components/UserProfilePage/UserDetails';
import Viewcategory from './Components/Category/viewAllCategory';
import EditFormPage from './Components/Category/EditFormPage';
import Details from './Components/Cart/Pdetails';
import Products from './Components/Cart/ProductDisplay';

import CreateVoucher from "./Components/Voucher/create-voucher.component";
import ListVoucher from "./Components/Voucher/list-voucher.component";
import EditVoucher from "./Components/Voucher/edit-voucher.component";
import Measument from './Components/Measurement/measument';


import DisplayDeliveryDetails from './Components/Delivery/DisplayDeliveryDetails'
import Deliveries from './Components/Delivery/DeliveriesAdmin'
import UpdateStatus from './Components/Delivery/UpdateStatus'
import StatusRequests from './Components/Delivery/OrderStatusRequests'
import OrderHistory from './Components/Delivery/OrderHistory'


import Admin from "./Components/Feedback/Admin";
import Comments from './Components/Feedback/Comments';


function App() {
  return (
    <Router>
      
      <Route path="/cardPay" component={CardPay} />
      <Route path="/createProduct" component={CreateProduct} />
      <Route path="/productList" component={ProductsList} />
      <Route path="/product" component={Products}/>
      <Route path="/detail/:id" component={Details}/>
      <Route path="/cardReq" component={LoyaltyForm}/>
      <Route path="/cardAdd" component={AddLoyaltyCard}/>
      <Route path="/ListDetails" component={ListDetails}/>
      <Route path="/home/:email/:password" component= {Auth(HomePage, null)} />
      <Route exact path="/" component={Auth(LandingPage, null)} />
      <Route path="/login" component={Auth(LoginPage, false)} />
      <Route path="/register" component={Auth(RegisterPage, false)} />
      <Route path="/category/upload" component={Auth(UploadCategoryPage, true)} />
      <Route path="/admin/profile/:id" component={viewDetails} />
      <Route path="/user/profile/:email/:password" component={UserDetails} />
      <Route exact path="/user/table" component={Viewcategory} />
      <Route exact path="/edit/:id" component={EditFormPage} />
      <Route path="/voucher" component={CreateVoucher} />
      <Route path ="/deliveryInsert/:id" component={DeliveryForm}/>
      <Route path ="/displayDelivery/:id" component={DisplayDeliveryDetails}/>
      <Route path="/deliveryAdmin" component={Deliveries}/>
      <Route path="/update/:id" component={UpdateStatus}/>
      <Route path="/checkRequests" component={StatusRequests}/>
      <Route path="/orderHistory" component={OrderHistory}/>
      <Route path="/create" component={CreateVoucher} />
      <Route path="/EditVoucher/:id" component={EditVoucher} />
      <Route path="/list" component={ListVoucher} />
      <Route path="/comment/:id" component={Comments} />
      <Route path="/admin" component={Admin} />


      <Route path="/measument" component={Measument} />

      </Router>

  );
}

export default App;
