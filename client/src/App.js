import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import CardPay from './Components/Payment/CardPay.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'


import Admin from "./Components/Feedback/Admin";
import Comments from './Components/Feedback/Comments';


function App() {
  return (
    <Router>

       <Route exact path="/" component={CardPay} />

<<<<<<< Updated upstream
        <Route exact path ="/" component={DeliveryForm}/>
        
=======
      
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

      <Route path="/comment/:id" component={Comments} />
      <Route path="/admin" component={Admin} />


>>>>>>> Stashed changes
      </Router>

  );
}

export default App;
