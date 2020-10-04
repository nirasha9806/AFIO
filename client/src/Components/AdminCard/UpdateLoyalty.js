import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';

class UpdateLoyalty extends Component {

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
   

    componentDidMount() {

        axios.get('/api/LoyaltyCard/editLoyalty/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              cardType: res.data.cardType,
              discount: res.data.discount
            });
          })
          .catch(function (error){
            console.log(error);
          })
      }

      onSubmit = (event) => {
        event.preventDefault();

        const LoyaltyCard = {
            cardType: this.state.cardType,
            discount: this.state.discount
        };

        axios.post('/api/LoyaltyCard/update/'+this.props.match.params.id, LoyaltyCard)
        .then(response =>
            console.log(response.data));
            alert("successful");
            this.props.history.push('/listDetails');
    }


    render() {
        return(
    
            <div>  
    
                <br></br><br></br><br></br>
    
                            <div class="col-lg-6 col-md-6">
    
                            <Form className="needs-validation" onSubmit={this.onSubmit}>
    
                                    <br></br>
                                    <h1 className="h3 mb-3 font-weight-body">Update details!!</h1>
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
                                     <Button className="btn btn-warning" onClick={this.onSubmit}> Update </Button>
                                </center>
                                <br></br>
                                
                            </Form>
    
                            </div>
                           
                    
                <br></br><br></br><br></br>
    
            </div>
            
        )
    }
    
}

export default UpdateLoyalty;

