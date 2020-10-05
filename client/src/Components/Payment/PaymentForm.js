import React, {Component} from 'react';
//import {Form,Button,Carousel,FormControl} from 'react-bootstrap'
import '../../CSS/mystyles.css';
import {Link} from 'react-router-dom';
import img1 from '../../Images/img1.webp';
import img2 from '../../Images/img2.webp';
import img5 from '../../Images/img5.webp';
import img7 from '../../Images/img7.webp';
import img8 from '../../Images/img8.webp';
import img3 from '../../Images/img3.webp';
import img4 from '../../Images/img4.webp';
import baby4 from '../../Images/baby4.png';
import baby5 from '../../Images/baby5.jpeg';
import baby6 from '../../Images/baby6.jpg';
import baby7 from '../../Images/baby7.webp';
import baby10 from '../../Images/baby10.webp';
import baby11 from '../../Images/baby11.jpg';
import baby6png from '../../Images/baby6png.png';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';


class PaymentForm extends Component{

  render() {
    return(
      <div className="App" >    
      <Navbar/>
           
      <div className = "gallery">  
                <img src = {img1} alt="img1" width={1000} height={800}  />
             </div>   
             <div className = "gallery">  
                <img src = {img2} alt="img2" width={1000} height={800}  />
             </div>    
             <div className = "gallery">  
                <img src = {img3} alt="img3" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {img8} alt="img5" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {img4} alt="img5" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {img5} alt="img5" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {img7} alt="img5" width={1000} height={800}  />
             </div>  
            
             <br/><br/><br/><br/><br/><br/>   
             <br/><br/><br/><br/>  
      <h1 className="topic" style={{textAlign:'center'}}>PAY NOW </h1>
      <h4 style={{textAlign:'center'}}>Please do payments to proceed ahead with your selected items</h4>
      <div className="col-10 mt-5 ml-5 mr-10">
      
      <center>
      <form>
         <h4 style={{textAlign:'center'}}>Select Payment option:</h4>
              <br/><br/>
              <div className="form-group">
              <Link to="/CardPay" style={{textAlign:'center'}} className="btn btn-primary btn-lg" role="button" ><span>Card Payments</span></Link>
              </div><br/><br/>
              <div className="form-group">
              <Link to="/Paypal" style={{textAlign:'center'}} className="btn btn-primary btn-lg" role="button" ><span>PayPal</span></Link>
              </div><br/><br/>
              
              <br/> 
              <br/> 
              <br/> 
           </form>
          </center>
           </div>
           
           <div className="imgs"> 
           <div className = "gallery1" >  
            <img src = {baby4} alt="baby1" width={1000} height={800}  />
             </div>   
             <div className = "gallery1">  
             <img src = {baby5} alt="baby2" width={1000} height={800}  />
             </div>
             <div className = "gallery1">  
               <img src = {baby6} alt="baby6" width={1000} height={800}  />
             </div> 
             <div className = "gallery1">  
               <img src = {baby6png} alt="baby" width={1000} height={800}  />
             </div> 
             <div className = "gallery1">  
               <img src = {baby7} alt="baby7" width={1000} height={800}  />
             </div>
             <div className = "gallery1">  
               <img src = {baby10} alt="baby8" width={1000} height={800}  />
             </div>
             <div className = "gallery1">  
               <img src = {baby11} alt="baby9" width={1000} height={800}  />
             </div>
             </div>
             
           <br/><br/>
           <br/><br/><br/>
           <br/><br/><br/>
           <br/>
           <Footer/>
         </div>
 
    );
  }
}
export default PaymentForm;

