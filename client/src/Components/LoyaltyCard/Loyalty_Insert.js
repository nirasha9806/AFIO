import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import axios from 'axios';

class LoyaltyForm extends  Component {

    //constructor
    constructor(props){
        super(props)
        
        //assign initial values
        this.state = {
            name: '',
            phone:'',
            type:'',
        }
    }

    //setState
    handleNameChange = event => {
        this.setState( {
            name: event.target.value
        })
    }

    handlePhoneChange = event => {
        this.setState( {
            phone: event.target.value
        })
    }

    handleTypeChange = event => {
        this.setState( {
            type: event.target.value
        })
    }

    
    onSubmit = (event) => {
        event.preventDefault();

        const LoyaltyCardReq = {
            name: this.state.name,
            phone: this.state.phone,
            type: this.state.type
        };

        axios.post('/api/LoyaltyCard/insertCard', LoyaltyCardReq)
            .then(response => {
                if(response.data.success){
                    alert('successful')
                } else {
                    alert('Failed')
                }
            })
        
    }

    render() {
        return(

            <div>  

                <br></br><br></br><br></br>

                            <div class="col-lg-6 col-md-6">

                            <Form className="needs-validation" onSubmit={this.onSubmit}>

                                    <br></br>
                                    <h1 className="h3 mb-3 font-weight-body">Get Your Shopping Card Now!!</h1>
                                    <br></br>

                                <div className="form-group">
                                    <lable> Name : </lable>
                                    <input name='name' className="form-control" type='text' value={this.state.name} onChange ={this.handleNameChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Phone : </label>
                                    <input name='phone' className="form-control" type='phone' value={this.state.phone} onChange={this.handlePhoneChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Type : </label>
                                    <input name='type' className="form-control" type='text' value={this.state.type} onChange={this.handleTypeChange}/>
                                </div>

                                <center>
                                    <Button onClick={this.onSubmit}> Request </Button>
                                </center> <br></br>
                                
                            </Form>
                            </div>
                           
                    
                <br></br><br></br><br></br>

            </div>
            
        )
    }
}

export default LoyaltyForm;