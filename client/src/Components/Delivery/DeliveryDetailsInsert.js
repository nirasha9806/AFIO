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

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
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

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }

    
    onSubmit = (event) => {
        event.preventDefault();

        const Delivery = {
            name: this.state.name,
            cusId:this.props.match.params.id,
            email: this.state.email,
            phone: this.state.phone,
            city: this.state.city,
            zipcode: this.state.zipcode,
            address: this.state.address,
            status: "Pending",
            date:this.state.date
        };

        axios.post('/api/delivery/insertDelivery/'+this.props.match.params.id, Delivery)
            .then(response => {
                if(response.data.success){
                    alert('succeful')
                    
                this.props.history.push('/payment/'+this.props.match.params.id);
                } else {
                    alert('Failed')
                }
            })
        
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
                                    <lable>Reciever's Name : </lable>
                                    <input name='name' className="form-control" type='text' value={this.state.name} onChange ={this.handleNameChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Email : </label>
                                    <input name='email' className="form-control" type='email' value={this.state.email} onChange={this.handleEmailChange} />
                                </div>

                                <div className="form-group">
                                    <label>Phone : </label>
                                    <input name='phone' className="form-control" type='phone' value={this.state.phone} onChange={this.handlePhoneChange}/>
                                </div>

                                <div className="form-group">
                                    <label>City : </label>
                                    <input name='city' className="form-control" type='text' value={this.state.city} onChange={this.handleCityChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Zip code : </label>
                                    <input name='zipcode' className="form-control" type='text' value={this.state.zipcode} onChange={this.handleZipCodeChange}/>
                                </div>

                                <div className="form-group">
                                    <lable>Address : </lable>
                                    <textarea name='address' className="form-control" value={this.state.address} onChange={this.handleAddressChange}></textarea>
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