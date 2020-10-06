import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import delivery from '../../Images/delivery.jpg';
import axios from 'axios';

class DeliveryForm extends Component {

    //constructor
    constructor(props){
        super(props)
        
        //assign initial values
        this.state = {
            input: {},
            errors: {},
            name: '',
            cusId:'',
            email:'',
            phone:'',
            city:'',
            zipcode:'',
            address:'',
            status:'',
            date:new Date(),
        }
    }

    //setState
    handleNameChange = event => {
        this.setState( {
            name: event.target.value
        })
    }

    handleChange = event => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
    }


    handleCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    handleZipCodeChange = event => {
        this.setState({
            zipcode: event.target.value
        })
    }
  

    
    onSubmit = (event) => {
        event.preventDefault();

        const Delivery = {
            name: this.state.name,
            cusId:this.props.match.params.id,
            email: this.state.input.email,
            phone: this.state.input.phone,
            city: this.state.city,
            zipcode: this.state.zipcode,
            address: this.state.input.address,
            status: "Pending",
            date:this.state.date
        };


        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["email"] = "";
            input["phone"] = "";
            input["address"] = "";
            this.setState({input:input});
      

        axios.post('/api/delivery/insertDelivery/'+this.props.match.params.id, Delivery)
            .then(response => {
                if(response.data.success){
                    
                this.props.history.push('/payment/'+this.props.match.params.id);
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
    
    
        if (!input["email"]) {
          isValid = false;
           errors["email"] = "Please enter your email Address.";
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";    
          }
    
          if (!input["address"]) {
            isValid = false;
            errors["address"] = "Please enter your Address.";
          }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    

    render() {
        return(

            <div>  

                <Navbar />

                <br></br><br></br><br></br>
                    <div class="container border border-dark rounded">
                        <div class="row">

                            <div class="col-log-5">
                                <img src={delivery} alt ="delivery" style={{ width:'500px',height:'100%'}}/>
                            </div>

                            <div class="col-lg-6 col-md-6">

                            <Form className="needs-validation" onSubmit={this.onSubmit}>

                                    <br></br>
                                    <h1 className="h3 mb-3 font-weight-bold">Tell Us Where To Deliver Your Order</h1>
                                    <br></br>

                                <div className="form-group">
                                    <lable>Reciever's Name : </lable><br></br>
                                    <input name='name' required className="form-control" type='text' value={this.state.name} onChange ={this.handleNameChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Email : </label><br></br>
                                    <input name='email' id="email" className="form-control" type='email' value={this.state.input.email} onChange={this.handleChange}/>
                                    <div className="text-danger">{this.state.errors.email}</div>
                                </div>

                                <div className="form-group">
                                    <label>Phone : </label><br></br>
                                    <input name='phone' className="form-control" type='phone' value={this.state.input.phone} onChange={this.handleChange}/>
                                    <div className="text-danger">{this.state.errors.phone}</div>
                                </div>

                                <div className="form-group">
                                    <label>City : </label><br></br>
                                    <input name='city' className="form-control" type='text' value={this.state.city} onChange={this.handleCityChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Zip code : </label><br></br>
                                    <input name='zipcode' className="form-control" type='text' value={this.state.zipcode} onChange={this.handleZipCodeChange}/>
                                </div>

                                <div className="form-group">
                                    <lable>Address : </lable><br></br>
                                    <textarea name='address' className="form-control" value={this.state.input.address} onChange={this.handleChange}></textarea>
                                    <div className="text-danger">{this.state.errors.address}</div>
                                </div>

                                <center>
                                    <Button variant="dark" onClick={this.onSubmit}><i class="fas fa-check-circle"></i>&nbsp; Proceed to Payment </Button>
                                </center> <br></br>
                                
                            </Form>
                            </div>
                        </div>    
                    </div>
                <br></br><br></br><br></br>

                <Footer />

            </div>
            
        )
    }
}

export default DeliveryForm