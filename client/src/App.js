import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import CardPay from './Components/Payment/CardPay.js';


import DeliveryForm from './Components/Delivery/DeliveryDetailsInsert'
import Details from './Components/Cart/Pdetails';
import Products from './Components/Cart/ProductDisplay';
<<<<<<< Updated upstream
=======
import CreateVoucher from "./Components/Voucher/create-voucher.component";
import DisplayDeliveryDetails from './Components/Delivery/DisplayDeliveryDetails'
import Deliveries from './Components/Delivery/DeliveriesAdmin'
import UpdateStatus from './Components/Delivery/UpdateStatus'
import StatusRequests from './Components/Delivery/OrderStatusRequests'
import OrderHistory from './Components/Delivery/OrderHistory'
import Admin from "./Components/Feedback/Admin";
import Comments from './Components/Feedback/Comments';

import Cart from './Components/Cart/CartDisplay';
import UpdateCartDisplay from './Components/Cart/UpdateCartDIsplay';

import Home from "./Components/pages/Home";
 import About from "./Components/pages/About";
 import Contacts from "./Components/pages/Contacts";
 import Details from "./Components/pages/Details";
 import News from "./Components/pages/News";
 import NotFoundPage from "./Components/pages/NotFoundPage";

 

>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
=======
      
      <Route path="/cardPay" component={CardPay} />
      {/* <Route exact path="/" component={PaymentForm} />
        <Route path="/Paypal" component={PayPal} />
        <Route path="/creditDisplay/:pin" component={CreditDisplay} />
        <Route path="/update/:id" component={UpdateCredit} />
        <Route path="/PaypalDisplay/:pwd" component={PayPalDisplay} />
        <Route path="/update/:id" component={UpdatePayPal} />
        <Route path="/FinalPage" component={FinalPage} /> */}
      <Route path="/createProduct" component={CreateProduct} />
      <Route path="/productList" component={ProductsList} />
      <Route path="/product/:category" component={Products}/>
      <Route path="/detail/:id" component={DetailsCart}/>

      <Route path="/cart" component={Cart}/> 
      <Route path="/updateCart/:id" component={UpdateCartDisplay}/> 
      
      <Route path="/cardReq" component={LoyaltyForm}/>
      <Route path="/cardAdd" component={AddLoyaltyCard}/>
      <Route path="/ListDetails" component={ListDetails}/>
      <Route path="/updateLoyalty/:id" component={UpdateLoyalty}/>
      <Route exact path="/homePage/:email/:password" component= {Auth(HomePage, null)} />
      <Route exact path="/adminDashboard" component={Auth(LandingPage, null)} />
      <Route path="/login" component={Auth(LoginPage, false)} />
      <Route path="/register" component={Auth(RegisterPage, false)} />
      <Route exact path="/category/upload" component={Auth(UploadCategoryPage, true)} />
      <Route path="/admin/profile/:id" component={viewDetails} />
      <Route path="/user/profile/:email/:password" component={UserDetails} />
      <Route path="/user/table" component={Viewcategory} />
      <Route path="/edit/:id" component={EditFormPage} />
      <Route path="/voucher" component={CreateVoucher} />
      <Route path ="/deliveryInsert/:id" component={DeliveryForm}/>
      <Route path ="/displayDelivery/:id" component={DisplayDeliveryDetails}/>
      <Route path="/deliveryAdmin" component={Deliveries}/>
      <Route path="/update/:id" component={UpdateStatus}/>
      <Route path="/checkRequests" component={StatusRequests}/>
      <Route path="/orderHistory" component={OrderHistory}/>

      <Route path="/create" component={CreateVoucher} />
     {/* <Route path="/EditVoucher/:id" component={EditVoucher} />
      <Route path="/list" component={ListVoucher} />*/}
      <Route path="/comment/:id" component={Comments} />
      <Route path="/adminFeedback" component={Admin} />

      <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/details" component={Details}/>
        <Route path="/news" component={News}/>
        <Route path="/not-found" component={NotFoundPage}/>
>>>>>>> Stashed changes

       <Route path="/cardPay" component={CardPay} />

        <Route exact path ="/" component={DeliveryForm}/>
        <Route path="/product" component={Products}/>
        <Route path="/detail/:id" component={Details}/>
      </Router>

  );
}

export default App;
