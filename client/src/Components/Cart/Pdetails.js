import React, {Component} from 'react';
import axios from 'axios';
import image from '../../Images/product.png';
import {Link} from "react-router-dom";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

class DetailsCart extends Component{

      constructor(props) {
        super(props)
               this.state = {
                products: [],
                size:'',
                quantity:'',
                cusId:'',
              }
            }

            handleSizeChange = event => {
              this.setState({
                  sizel: event.target.value
              })
          }

          handleQtyChange = event => {
            this.setState({
                quantity: event.target.value
            })
        }
    
    
     //Retrieve
     componentDidMount() {
      axios.get('/api/Cart/display/'+this.props.match.params.id)
      .then(res => {
          const products = res.data;
          this.setState({ products });
        })
    }

    onChangeRadio1 = e=> {
      console.log(e.target.value)
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    //insert
    onSubmit(pName,price,discount,category,size,qty){

      const Cart = {
        productName:pName,
        price:price,
        discount:discount,
        category:category,
        size:size,
        quantity:qty,
        cusId:this.props.match.params.uid,
      };

      axios.post('/api/Cart/insertCart/'+this.props.match.params.uid, Cart)
          .then(response => {
              if(response.data.success){
                  alert('Successful')
              } else {
                  alert('Please Try Again !!')
              }
          })
      
  }
    
    
          render(){
            return(

              <div>
              <Navbar />
      
          <br></br>
      
          <div class="float-md-right">
      
              <Link to={"/cart/"+this.props.match.params.uid}> &nbsp; <i class="fas fa-cart-plus fa-2x"  style={{color:"black"}}>
              </i></Link>
          </div>

              <card>
              <div className="container py-5">
            {/* <div className= "card" style ={{width:'100%', paddingLeft:'20px', paddingTop:'20px', fontSize:'16px', paddingBottom:'20px', marginTop:'10px'}}> */}
              
                    { this.state.products.map(product => 
                    <ul>
                    <li className="list-group-item">
                      <div ><img src={`http://localhost:5000/${product.image}`} style ={{width:'35%', marginLeft: '350px'}} /></div>
                    </li>
                    <li className="list-group-item">{product.productName}</li>
                    <li className="list-group-item"><p><strong>Price: {product.price}.00</strong></p></li>
                    <li className="list-group-item"><p>Discount: {product.discount}%</p></li>
                    <li className="list-group-item">{product.categoryType}</li>
                    
                    <li class="list-group-item">
                    <label>Size</label><br></br>
                      <input type="radio" name = "size" value="S" required checked={this.state.size==="S"} onChange={this.onChangeRadio1}/>&nbsp;<strong>S</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="M" required checked={this.state.size==="M"} onChange={this.onChangeRadio1}/>&nbsp; <strong>M</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="L" required checked={this.state.size==="L"} onChange={this.onChangeRadio1}/> &nbsp;<strong>L</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XL" required checked={this.state.size==="XL"} onChange={this.onChangeRadio1}/> &nbsp;<strong>XL</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XXL" required checked={this.state.size==="XXL"} onChange={this.onChangeRadio1}/> <strong>XXL</strong> 

                    </li>
                    <li class="list-group-item">
                    <label>Quantity:<input type="text" value={this.state.quantity} onChange={this.handleQtyChange}></input></label><br></br>
                    
                    </li>
                    <li class="list-group-item">
                    <button className="btn btn-outline-warning"  onClick={() =>this.onSubmit(product.productName,product.price,product.discount,product.categoryType,this.state.size,this.state.quantity)}>Add to Cart</button>
                    <button style={{marginLeft:"100px"}} className="btn btn-outline-info"><Link to='/measument'>New Mesurements</Link></button>
                     </li>                
                    </ul>        
                  )}
                
             </div>
             </card>

             <Footer />
              </div>
             
            )
          }
}

export default DetailsCart