import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import '../CSS/mystyles.css';

class UpdateCredit extends Component {

    constructor(props){
        super(props)

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.handleCVC = this.handleCVC.bind(this);
        this.handleExpiryDate = this.handleExpiryDate.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.handlePinNumber = this.handlePinNumber.bind(this);
        this.handleBillingAddress= this.handleBillingAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
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

    componentDidMount() {

        axios.get('/api/payment/edit/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              cname: res.data.cname,
              email: res.data.email,
              CVC: res.data.CVC,
              month: res.data.month,
              year: res.data.year,
              pin_number: res.data.pin_number,
              cardName: res.data.cardName,
              baddress: res.data.baddress
            });
          })
          .catch(function (error){
            console.log(error);
          })
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

        axios.post('/api/payment/update/'+this.props.match.params.id, Credit)
        .then(response =>
            console.log(response.data));
            this.props.history.push('/creditDisplay/'+this.state.pin_number)
            
    }


    render(){
        return(
            <div className="App">
                <Navbar/>
                <div className="col-10 mt-5 ml-5 mr-10"> 
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
            <input type="text" name="cvc" onChange={this.handleCVC} value={this.state.CVC} className="form-control" placeholder="0000-0000-0000-0000"/><br/>
        </div>
  
        <label>Expiry Date : </label>
        <div className="form-group"> 
            <input type="text" placeholder="MM/YY" className="form-control" value={this.state.expiry} onChange={this.handleExpiryDate}/>
        <br/>
        </div>
                 
        <div className="form-group">
            <label>Security Code</label><br/>
            <input type="text" name="pin"  onChange={this.handlePinNumber}
             placeholder="Security code" value={this.state.pin_number} className="form-control"/><br/>
        </div>
  
              <div className="form-group">
                  <label>Name of the Card Holder :</label><br/>
                   <input type="text" onChange={this.cardNameHandler} value={this.state.cardName} className="form-control"/>
              </div> 
              
              <div className ="form-group">
               <Link  value="Pay Rs." className="btn btn-primary"  onClick={this.onSubmit}>Update</Link> 
             </div>
             </form>
            </div>
            </center>    
            </div>
                <Footer/>
            </div>
        )

    }
}

export default UpdateCredit
