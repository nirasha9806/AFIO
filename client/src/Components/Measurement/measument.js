import React, { Component } from 'react';
import '../../CSS/myStyle.css'
import img10 from '../../Images/index.jpg';
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';


export default class Measument extends Component { //implemented class component
    
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {},
          //email:'',
          size:'',
          product:'',
          height:'',
          waist:'',
          neck:'',
          color:''
        };
         
        this.onChangeEmail = this.onChangeEmail.bind(this);
      }
         
      onChangeEmail(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
        
      handleSubmit  = (event) => {
        event.preventDefault();

        const Measurement = {
            //email: this.state.email,
            size: this.state.size,
            product: this.state.product,
            height: this.state.height,
            waist: this.state.waist,
            neck: this.state.neck,
            color: this.state.color,
        };

      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["email"] = "";
            this.setState({input:input});
      
            alert('Your measurement details were successfully sent to the admin');
        }

        axios.post("/api/measurement/insertMeasurement", Measurement)
            .then(response => {
                if(response.data.success){
                    console.log('Data has been sent to the server')
                } else {
                    console.log('Data not sent to the server')
                }
            })
      
    }

    onChangeSize = e =>{
        console.log(e.target.value)

        this.setState({
          size: e.target.value //target is textbox and value is textbox value
        })
    }
    
    onChangeProduct = e =>{
        console.log(e.target.value)

        this.setState({
          product: e.target.value //target is textbox and value is textbox value
        })
    }
    
    onChangeHeight = e =>{
        console.log(e.target.value)

        this.setState({
          height: e.target.value //target is textbox and value is textbox value
        })
    }
    
    onChangeWaist = e =>{
        console.log(e.target.value)

        this.setState({
          waist: e.target.value //target is textbox and value is textbox value
        })
    }
    
    onChangeNeck = e =>{
        console.log(e.target.value)

        this.setState({
          neck: e.target.value //target is textbox and value is textbox value
        })
    }
    
    onChangeColor = e =>{
        console.log(e.target.value)

        this.setState({
          color: e.target.value //target is textbox and value is textbox value
        })
    }
    

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
    
        if (!input["email"]) {
          isValid = false;
           errors["email"] = "Please enter your email Address.";
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
            <div className ="App">

                <Navbar/>


                <center>
                        <h2 className = 'header2'>New Measurements</h2>
                        <p className ='p1'> Enter your measurement details here !!</p>
                </center>
                

                <div className="card " style= {{width:'40rem', marginLeft:'245px'}}>

                       
                        <div className="card-body">
                        <center>
                                <img
                                    width={300} height={200}
                                    src={img10}
                                    alt=""
                                    />
                            </center>
                            <div class="card-header">
                                <b><center>Measurement Details Form</center></b>
                            </div>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <b>
                        
                            <div class="form-group">
                                
                                &nbsp; &nbsp; &nbsp;<label for="email" required>Email address *</label>
                                <div style ={{maxWidth:'600px', paddingLeft:'20px'}}>
                                <input type="text" class="form-control" name="email" placeholder="enter email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                id="email"/></div>
                                <small id="emailHelp" class="form-text text-muted">&nbsp; &nbsp; &nbsp; &nbsp; We'll never share your email with anyone else.</small>
                            
                                <div className="text-danger">{this.state.errors.email}</div>
                            </div>

                            <div class="form-group">
                                &nbsp; &nbsp; &nbsp;<label for="">Size *</label>
                                <div style ={{maxWidth:'600px', paddingLeft:'20px'}}>
                                <select className="form-control" value={this.state.size} onChange={this.onChangeSize} required>
                                    <option value = "XS">xs</option>
                                    <option value = "S">s</option>
                                    <option value = "L">l</option>
                                    <option value = "XL">xl</option>
                                    <option value = "XXL">xxl</option>
                                </select></div>
                            </div>
 
                           
                            <div class="form-group">
                                 &nbsp; &nbsp; &nbsp;<label for="" required>Product *</label>
                                <div style ={{maxWidth:'600px', paddingLeft:'20px'}}>
                                <input type="text" class="form-control"
                                     value={this.state.product}
                                     onChange={this.onChangeProduct} placeholder="enter product"/></div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    &nbsp; &nbsp; &nbsp;<label for="">Height (INCH)</label>
                                    <div style ={{ paddingLeft:'20px', paddingRight:'20px'}}>
                                    <input type="text" class="form-control" 
                                         value={this.state.height}
                                         onChange={this.onChangeHeight}
                                        placeholder="enter height"/></div>
                                </div>

                                <div class="form-group col-md-6">
                                    &nbsp; <label for="">Waist (INCH)</label>
                                    <div style ={{ paddingRight:'40px'}}>
                                    <input type="text" class="form-control"
                                         value={this.state.waist}
                                         onChange={this.onChangeWaist} placeholder="enter waist"/></div>
                                </div>

                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    &nbsp; &nbsp; &nbsp;<label for="">Neck (INCH)</label>
                                    <div style ={{paddingLeft:'20px', paddingRight:'20px'}}>
                                    <input type="text" class="form-control" 
                                         value={this.state.neck}
                                         onChange={this.onChangeNeck} placeholder="enter neck"/></div>
                                </div>

                                <div class="form-group col-md-6">
                                    &nbsp; <label for="" >Color</label>
                                    <div style ={{ paddingRight:'40px'}}>
                                    <input type="text" class="form-control" 
                                         value={this.state.color}
                                         onChange={this.onChangeColor} placeholder="enter color"/></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <center>
                                    <input type="submit" value="Submit" class="btn btn-dark" />
                                </center>
                            </div>
                            
                        </b></form>

                </div>
                        
                <Footer/>

            </div>

        )
    }
}