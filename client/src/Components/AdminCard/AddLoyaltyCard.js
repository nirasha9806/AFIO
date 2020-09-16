import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import axios from 'axios';
import {Link} from 'react-router-dom'

 class AddLoyaltyCard extends Component {

    //constructor
    constructor(props){
        super(props)
        
        //assign initial values
        this.state = {
            cardType: '',
            discount:'',
            
            
        }
    }


   //setState
    handleCardTypeChange = event => {
        this.setState( {
            cardType: event.target.value
        })
    }

    handleDiscountChange = event => {
        this.setState( {
            discount: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();

        const LoyaltyCardAdd = {
            cardType: this.state.cardType,
            discount: this.state.discount
            
        };

        axios.post('/api/LoyaltyCard/addCard', LoyaltyCardAdd)
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
                                <h1 className="h3 mb-3 font-weight-body">Add details!!</h1>
                                <br></br>

                            <div className="form-group">
                                <lable> Card Type : </lable>
                                <input name='cardType' className="form-control" type='text' value={this.state.cardType} onChange ={this.handleCardTypeChange}/>
                            </div>

                            <div className="form-group">
                                <label>Discount : </label>
                                <input name='discount' className="form-control" type='text' value={this.state.discount} onChange={this.handleDiscountChange}/>
                            </div>

                            

                            <center>
                                <Link className="btn btn-primary" onClick={this.onSubmit}> Request</Link>
                            </center> <br></br>
                            
                        </Form>

                        </div>
                       
                
            <br></br><br></br><br></br>

        </div>
        
    )
}
}

export default AddLoyaltyCard;