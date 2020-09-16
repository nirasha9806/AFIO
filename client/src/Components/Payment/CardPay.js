import React, {Component} from 'react';
import '../../CSS/mystyles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';


 class CardPay extends Component{
 
  constructor(props){
    super(props)

    this.state={
      cname:'',
      email:'',
      CVC:'',
      month:'',
      year:'',
      pin_number:'',
      cardName:'',
      baddress:''
    }
   
  }
  
  changeNameHandler = event =>{ this.setState({cname:event.target.value})}
  changeEmailHandler = event =>{ this.setState({email:event.target.value}) }
  handleCVC = event =>{ this.setState({CVC:event.target.value}) }
  handleExpiryDate = event =>{ this.setState({month:event.target.value}) }
  changeYearHandler = event =>{this.setState({year:event.target.value})}
  handlePinNumber = event =>{ this.setState({pin_number:event.target.value}) }
  cardNameHandler = event =>{ this.setState({cardName:event.target.value}) }
  handleBillingAddress = event =>{ this.setState({baddress:event.target.value})}
  
 

  onSubmit = (event) => {
    event.preventDefault();
 
    const Credit = {
      
        cname:this.state.cname,
        email: this.state.email,
        month: this.state.month,
        year: this.state.year,
        pin_number: this.state.pin_number,
        CVC: this.state.CVC,
        cardName : this.state.cardName,
        baddress:this.state.baddress
    };

    axios.post("/api/payment/insertCredit", Credit)
        .then(response => {
            if(response.data.success){
                alert('successful')
                this.props.history.push('/creditDisplay/'+ this.state.pin_number);

            } else {
                alert('Failed')
            }
        })
    
}
render() {
        return(
          <div className="App" >
            <Navbar/>
            <div className="col-10 mt-5 ml-5 mr-10">
           
         <div className="form">  
            <h1 className="topic">PAY NOW </h1>
            <h4>Please do payments to proceed ahead with your selected items</h4>
        <center>
            <div class="card" style={{width:'48rem'}}>
           <form  onSubmit={this.onSubmit} className="payform">
           <h3>Payments through Credit Card</h3>
           <label>Customer Name :   </label><br/>
        <input type="text"  onChange={this.changeNameHandler} value={this.state.cname} className="form-control" /><br/>
          
                <label>Email Address: </label> <br/>
                <input type="text" onChange={this.changeEmailHandler} value={this.state.email} className ="form-control"/>
            
            <div className="form-group">
                <label>Card Information :</label><br/>
                <input type="text" name="cvc"
                placeholder="CVC" onChange={this.handleCVC} value={this.state.CVC} className="form-control"/><br/>
            </div>
            <div className="form-group" style={{maxWidth:'200px'}}>
                <label>Expiry Date</label><br/>
                <select   onChange={this.handleExpiryDate} value={this.state.month}  className="form-control" 
                name="month" placeholder="MM" >
                     <option>MM</option>
                    <option>1</option><option>2</option>
                    <option>3</option><option>4</option>
                    <option>5</option> <option>6</option>
                    <option>7</option>  <option>8</option>
                    <option>9</option>  <option>10</option>
                    <option>11</option>  <option>12</option>
                </select>
               </div>
               <div className="form-group"> 
                <input type="text" placeholder="YY" className="form-control" value={this.state.year} onChange={this.changeYearHandler}/>
               <br/>
               </div>
               
                <div className="form-group">
                <label>Security Code</label><br/>
                <input type="text" name="pin"  onChange={this.handlePinNumber}
                placeholder="Security code" value={this.state.pin_number} className="form-control"/><br/>
            </div>

            <div className="form-group">
                <label>Name mentioned on Card :</label><br/>
                 <input type="text" onChange={this.cardNameHandler} value={this.state.cardName} className="form-control"/>
            </div> 
            <div className="form-group" style={{maxWidth:'450px'}}> 
                <label>Billing Address :</label> <br/>
                <textarea value={this.state.baddress} onChange={this.handleBillingAddress}
                name="baddress" className="form-control"></textarea>
            </div>
            <div className ="form-group">
              <Link  value="Pay Rs." className="btn btn-primary"  onClick={this.onSubmit}>Pay</Link> 
                
            </div>
           </form>
           </div>
        </center>
           </div>
          
           </div>
           <Footer/>
        </div>
    
        );
    }
}

export default CardPay;