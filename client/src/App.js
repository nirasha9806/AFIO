import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CardPay from './Components/Payment/CardPay.js';
import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'
import CreateProduct from './Components/Product/create-product.component'
import ProductsList from './Components/Product/products-list.component'


<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes





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
<<<<<<< Updated upstream
      <Route path="/productList" exact component={ProductsList} />


       
        <Route path="/product" component={Products}/>
        <Route path="/detail/:id" component={Details}/>

        <Route path="/voucher" component={CreateVoucher} />
=======
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
      <Route path="/create" component={CreateVoucher} />
      <Route path="/EditVoucher/:id" component={EditVoucher} />
      <Route path="/list" component={ListVoucher} />
      <Route path ="/deliveryInsert/:id" component={DeliveryForm}/>
      <Route path ="/displayDelivery/:id" component={DisplayDeliveryDetails}/>
      <Route path="/deliveryAdmin" component={Deliveries}/>
      <Route path="/update/:id" component={UpdateStatus}/>
      <Route path="/checkRequests" component={StatusRequests}/>
      <Route path="/orderHistory" component={OrderHistory}/>
>>>>>>> Stashed changes

      </Router>

  );
}

export default App;
