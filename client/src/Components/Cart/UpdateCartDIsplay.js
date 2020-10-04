import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import image from '../../Images/product.png';

//import Cart from '../../backend/models/Cart';

export default class UpdateCartDisplay extends Component{

  constructor(props) {
    super(props)
    
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeQyantity = this.onChangeQyantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

           this.state = {
            size:'',
            quantity:''
          }
          }
        


      //retrieve data
      componentDidMount() {

        axios.get('/api/Cart/edit/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              size: res.data.size,
              quantity:res.data.quantity
            });
          })
          .catch(function (error){
            console.log(error);
          })
      }
     

      onChangeSize = e =>{
        console.log(e.target.value)
        this.setState({

          size: e.target.value
        })
      }

      onChangeQyantity= e =>{
        console.log(e.target.value)
        this.setState({

          quantity: e.target.value
        })
      }

      onSubmit = (event) => {
        event.preventDefault();

        const Cart = {
            size: this.state.size,
            quantity:this.state.quantity
        };

        axios.post('/api/Cart/update/'+this.props.match.params.id, Cart)
        .then(response =>
            console.log(response.data));
            window.location = '/Cart';
    }    
      
    render(){
      return(

        <div className=" border border-secondary col-md-5 mt-3 mx-auto ">

        <br></br>

        <h3 className="h3 mb-3 font-weight-bold">Update</h3>

        <br></br>
        <form className="needs-validation" onSubmit={this.onSubmit}>

            <div className="form-group">
                <lable>Size : </lable> <br></br>
                <input className="form-control" type='text' value={this.state.size} onChange ={this.onChangeSize}/>
            </div>

            <div className="form-group">
                <lable>Quantity : </lable> <br></br>
                <input className="form-control" type='text' value={this.state.quantity} onChange ={this.onChangeQyantity}/>
            </div>

            <center>
                <button className="btn btn-warning" onClick={this.onSubmit}> Update </button>
            </center>
            
            <br></br>

        </form>
    </div> 
       
      )
    }


  }

      

        
