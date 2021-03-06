import React, { Component } from 'react';
import '../../CSS/myStyle.css'
import img10 from '../../Images/index.jpg';
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import jsPDF from 'jspdf'



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

    //report genarate
    unduhPdf(e){
        e.preventDefault();

        var doc = new jsPDF('p','pt'); //pass two argument
        
        doc.setFont('Bold')
        doc.setTextColor('Red')
        doc.setFontSize(30)
        doc.text(20,50,'Entered Measurement Details') //topic

        doc.setFont('courier')
        doc.setTextColor('Black')
        doc.setFontSize(20)
        doc.text(`Entered size: ${this.state.size}`, 40, 100)
        doc.text(`Entered product: ${this.state.product}`, 40, 120)
        doc.text(`Entered height: ${this.state.height}`, 40, 140)
        doc.text(`Entered waist: ${this.state.waist}`, 40, 160)
        doc.text(`Entered neck: ${this.state.neck}`, 40, 180)
        doc.text(`Entered color: ${this.state.color}`, 40, 200)

        doc.setFont('Bold')
        doc.setTextColor('Black')
        doc.setFontSize(10)
        doc.text(40,250,'Your measurement details were successfully sent to the admin. We will notify you via email after finished your dress.')

        doc.save('Measurement.pdf')//saved name
    };

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


<br/><br/>
                <center>
                        <h2 className = 'header2'>New Measurements</h2>
                        <p className ='p1'> Enter your measurement details here !!</p>
                </center>
                

                <div className="shadow p-5" style= {{width:'45rem', marginLeft:'325px'}}>

                       
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
                                <div>
                                <input type="text" class="form-control" name="email" placeholder="enter email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                id="email"/></div>
                                <small id="emailHelp" class="form-text text-muted"> We'll never share your email with anyone else.</small>
                            
                                <div className="text-danger">{this.state.errors.email}</div>
                            </div>
                            

                            <div class="form-group">
                                &nbsp; &nbsp; &nbsp;<label for="">Size *</label>
                                <div style ={{maxWidth:'470px', paddingLeft:'150px'}}>
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
                                <div>
                                <input type="text" class="form-control"
                                     value={this.state.product}
                                     onChange={this.onChangeProduct} placeholder="enter product"/></div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">Height (INCH)</label>
                                    <div>
                                    <input type="text" class="form-control" 
                                         value={this.state.height}
                                         onChange={this.onChangeHeight}
                                        placeholder="enter height"/></div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="">Waist (INCH)</label>
                                    <div>
                                    <input type="text" class="form-control"
                                         value={this.state.waist}
                                         onChange={this.onChangeWaist} placeholder="enter waist"/></div>
                                </div>

                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">Neck (INCH)</label>
                                    <div>
                                    <input type="text" class="form-control" 
                                         value={this.state.neck}
                                         onChange={this.onChangeNeck} placeholder="enter neck"/></div>
                                </div>

                                <div class="form-group col-md-6">
                                   <label for="" >Color</label>
                                    <div>
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

                            <div><button type="button" class="btn btn-outline-secondary btn-sm"  onClick={this.unduhPdf.bind(this)}>Download PDF</button></div>

                        </b></form>

                </div>
                        
                <Footer/>

            </div>

        )
    }
}