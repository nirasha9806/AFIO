import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import axios from 'axios';
import {Link} from 'react-router-dom'

const initialState = {
    name: '',
    phone:'',
    type:'',
    nameError:'',
    phoneError:'',
    typeError:''
}

class LoyaltyForm extends  Component {

    //constructor
    constructor(props){
        super(props)
        
        //assign initial values
        this.state = initialState;
        
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
        });
    };
    validate = ( ) => {
        let nameError= '';
        let phoneError ='';
        let typeError = '';
        if(this.state.name.includes) {
            nameError= 'name can not be blank';
        }
        if(this.state.phone.includes) {
            phoneError= 'phone number can not be blank';
        }
        if (nameError) {
            this.setState({nameError});
            return false;
        }
        

        if (phoneError) {
            this.setState({phoneError});
            return false;
        }
        return true;
    };
     
    onSubmit = (event) => {
        event.preventDefault();
        const isValied = this.validate();
        if (isValied){
            console.log(this.state);
            this.setState(initialState);
        
        }
        
        

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

              
                    <Navbar/>
                            

                            <Form className="needs-validation" onSubmit={this.onSubmit}>

                            <section className = "my-5 py-5">
               <div className ="container">
                   <div className ="well well-sm"><div>
                       <h3><strong>Get Your Loyalty Card Now!!</strong></h3><br></br>
                      </div>
                    </div>
                    <div className ="row">
                        <div className= "col-md-7">
                        <iframe src="../../img/Loyalty card.jpg" style = {{
                            border: '0',
                            width: '200%',
                            height: '550px',
                            frameborder:'0'
                        }}allowFullscreen/>
                            </div>
                            <div className= "col-md-5">
                                <h4><strong>Add Your Details</strong></h4>
                                <form>
                                    <div className = "form-group">
                                     <input type="text" name ='name' className="form-control" value={this.state.name} onChange ={this.handleNameChange}
                                     placeholder="Name"/>
                                     <div style={{ fontSize:10, color:"red"}}>{this.state.nameError}</div>
                                     </div>   
                                      
                                     <div className = "form-group">
                                     <input type="phone" className="form-control" name = 'tel' value={this.state.phone} onChange ={this.handlePhoneChange}
                                     placeholder="phone"/>
                                     <div style={{ fontSize:10, color:"red"}}>{this.state.phoneError}</div>
                                     </div> 
                                     <div className = "form-group">
                                     <input type="text" className="form-control" name = 'type' value={this.state.type} onChange ={this.handleTypeChange}
                                     placeholder="Type"/><div style={{ fontSize:10, color:"red"}}>{this.state.typeError}</div>
                                     </div>
                                       <textarea className= "form-control" cols ="30" rows ="3"
                                        placeholder="Message"></textarea>
                                        <Link className="btn btn-outline-dark text-uppercase mt-2" onClick={this.onSubmit}>
                                          &nbsp;Send
                                            </Link>
                                            <Link to ="/" className ="btn btn-outline-dark text-uppercase mt-2">
                                           <i className="fas fa-home"/>&nbsp;Back To home
                        </Link>
                                     </form>
                                     </div>
                         </div>
                    </div>
                </section>
                            </Form>   <Footer/>
                            </div>
                           
                 
          

           
            
        )
    }
}

export default LoyaltyForm;