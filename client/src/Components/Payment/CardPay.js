import React, {Component} from 'react';
//import './mystyles.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';


class CardPay extends Component{
 
    constructor(props){
      super(props)
  
      this.state={
        cname:'',
        cardType:'',
        bankname:'',
        CVC:'',
        expiry:'',
        pin_number:'',
        cardName:''
        
      }
     
    }
    
    changeNameHandler = event =>{ this.setState({cname:event.target.value})}
    changeCardTypeHandler = event =>{ this.setState({cardType:event.target.value}) }
    changeBankName = event =>{this.setState({bankname:event.target.value})}
    handleCVC = event =>{ this.setState({CVC:event.target.value}) }
    handleExpiryDate = event =>{ this.setState({expiry:event.target.value}) }
    handlePinNumber = event =>{ this.setState({pin_number:event.target.value}) }
    cardNameHandler = event =>{ this.setState({cardName:event.target.value}) }
   
  
    onSubmit = (event) => {
      event.preventDefault();
   
      const Card = {
        
          cname:this.state.cname,
          cardType: this.state.cardType,
          bankname: this.state.bankname,
          CVC: this.state.CVC,
          expiry: this.state.expiry,
          pin_number: this.state.pin_number,
          cardName : this.state.cardName
         
      };
      //callig the validate method
      if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["cvc"] = "";
        input["pin"] = "";
        input["expiry"] = "";
        this.setState({input:input});
  
      axios.post("/api/payment/insertCredit", Card)
          .then(response => {
              if(response.data.success){
                  alert('successful')
                  this.props.history.push('/creditDisplay/'+ this.state.pin_number+'/'+this.props.match.params.tot);
  
              } else {
                  alert('Failed')
              }
          })
      }
  }
  //validate method
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;


    if (!input["cvc"]) {
      isValid = false;
       errors["cvc"] = "Please enter your CVC";
    }

    if (!input["pin"]) {
        isValid = false;
        errors["pin"] = "Please enter a valid Security key";    
      }

      if (!input["expiry"]) {
        isValid = false;
        errors["expiry"] = "Please enter the Expiry Date.";
      }

   
    this.setState({
      errors: errors
    });

    return isValid;
}

  
   //method of demo button
   demo =() => { 
    //setState
    this.setState( {
            cname: "Raveena"
        })

    this.setState( {
        cardType: "VISA card"
    })

    this.setState( {
        bankname: "BOC"
    }) 
   
    this.setState({
        CVC:"5555-5555-5555-5555"
    })
    this.setState({
        expiry:"22/21"
    })
    this.setState({
        pin_number:"222"
    })
    this.setState({
        cardName:"Raveena Wickramasinghe"
    })

    let input = {};
        input["cvc"] = "1111-1111-1111-1111";
        input["expiry"] = "22/24";
        input["pin"] = "223";
        this.setState({input:input});
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
             <h3>Card Payments</h3>
             <label>Customer Name :   </label><br/>
          <input type="text"  onChange={this.changeNameHandler} value={this.state.cname} className="form-control" /><br/>
  
        <div className="form-group" style={{maxWidth:'500px'}}>
            <label>Type of Card : </label> <br/>
            <select   onChange={this.changeCardTypeHandler} value={this.state.cardType}  className="form-control" 
            name="cardType" placeholder="Card Type" >
                <option>VISA</option>
                <option>MASTER cards</option> 
            </select>
        </div>
        <div>
         <label>Name of the Issuer    </label><br/>
         <input type="text"  onChange={this.changeBankName} value={this.state.bankname} className="form-control" placeholder="Bank Name" /><br/>
        </div>
  
        <div className="form-group">
            <label>Card Information :</label><br/>
            <input type="text" name='cvc' onChange={this.handleCVC} value={this.state.CVC} className="form-control" placeholder="0000-0000-0000-0000"/><br/>
        </div>
  
        <label>Expiry Date : </label>
        <div className="form-group"> 
            <input type="text" placeholder="MM/YY" name='expiry'className="form-control" value={this.state.expiry} onChange={this.handleExpiryDate}/>
        <br/>
        </div>
                 
        <div className="form-group">
            <label>Security Code</label><br/>
            <input type="text" name='pin'  onChange={this.handlePinNumber}
             placeholder="Security code" value={this.state.pin_number} className="form-control"/><br/>
        </div>
  

         <div className="form-group">
            <label>Name of the Card Holder :</label><br/>
            <input type="text" onChange={this.cardNameHandler} value={this.state.cardName} className="form-control"/>
        </div> 
              
        <div className ="form-group">
         <Link  value="Pay Rs." className="btn btn-primary"  onClick={this.onSubmit}>Pay</Link> 
         <Button variant="primary" onClick={this.demo}>Demo</Button>      
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