import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import '../CSS/mystyles.css';


class UpdatePayPal extends Component {

    constructor(props){
        super(props)

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cname:'',
            email:'',
            password:''
        }
    }

    componentDidMount() {

        axios.get('/api/paypal/edit/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              cname: res.data.cname,
              email: res.data.email,
              password: res.data.password
             
            });
          })
          .catch(function (error){
            console.log(error);
          })
      }

    changeNameHandler = event =>{ this.setState({cname:event.target.value})}
    changeEmailHandler = event =>{ this.setState({email:event.target.value}) }
    changePasswordHandler = event =>{ this.setState({CVC:event.target.value})}
   
    onSubmit = (event) => {
        event.preventDefault();

        const PayPal = {
            cname:this.state.cname,
            email: this.state.email,
            password: this.state.password
           
        };

        axios.post('/api/paypal/update/'+this.props.match.params.id, PayPal)
        .then(response =>
            console.log(response.data));
            alert("update")
    }


    render(){
        return(
            <div className="App">
                <Navbar/>
                <div className="col-10 mt-5 ml-5 mr-10"> 
             <center> 
            <div class="card" style={{width:'48rem'}}>
            <form  onSubmit={this.onSubmit} className="payform">
            <h3>Payments through Credit Card</h3>
            <label>Customer Name :   </label><br/>
                <input type="text"  onChange={this.changeNameHandler} value={this.state.cname} className="form-control" /><br/>
          
                <label>Email Address: </label> <br/> 
                <input type="text" onChange={this.changeEmailHandler} value={this.state.email}  className ="form-control"/><br/>
            
            <div className ="form-group">
                <label>Password: </label><br/>
                <input type="password" onChange={this.changePasswordHandler} 
                  value={this.state.password}  className="formpwd"/><br/>
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

export default UpdatePayPal
