import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
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
        <NavBar /> <br></br><br></br><br></br><br></br>

    <div className="container">  <br></br>

      <Button variant="dark"><Link class="badge badge-dark" to="ListDetails">View Details</Link></Button> 

      <br></br><br></br>
      <center>
        <h1 className="h1 mb-3 font-weight-bold ">Add Card Details</h1>
      </center></div>

      <br></br>


          <br></br><br></br>
          
                    <center>
                        <table class="table" className="needs-validation" onSubmit={this.onSubmit}>
                        <tr>
                               

                            <div className="form-group" >
                                <lable> Card Type : </lable>
                                <input name='cardType' className="form-control" type='text' value={this.state.cardType} onChange ={this.handleCardTypeChange}/>
                            </div>

                            <div className="form-group">
                                <label>Discount : </label>
                                <input name='discount' className="form-control" type='text' value={this.state.discount} onChange={this.handleDiscountChange}/>
                            </div>
                            </tr>
                            
                            

                            <center>
                                <Link className="btn btn-primary" onClick={this.onSubmit}> Add</Link>
                            </center> <br></br></table>
                            </center>
                            <Footer/>
                       
                        </div> 
                        
                       
                
         
        
    )
}
}

export default AddLoyaltyCard;