import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import image from '../../Images/product.png';

class Products extends Component{


  constructor(props) {
    super(props)
           this.state = {
            products: [],
          }
        }


      //retrieve data
      componentDidMount() {
        axios.get('/api/Cart/displayProduct')
        .then(res => {
            const products = res.data;
            this.setState({ products });
          })
      }
/*edit*/ 
render(){
  return(

    

    // <table>
    //   <tr>
    //     <th>Product Name</th>
    //     <th>Price</th>
    //     <th>Discount</th>
    //   </tr>
   
    
    <div style={{padding:"250px"}} >
      <div><h1 className="display-4" style={{alignItems:"center"}}>Products</h1></div>
    

      { this.state.products.map(product =>
      
      // <div className="row">
      // <div className="col-10 mx-auto col-md-6 my-3">
      //    <img src= {image}/>
      <div style={{display:"inline-block",padding:"20px"}} >
      <div><img src={image}/>    
      <div>

      <div >
        <h2>{product.productName}</h2>
        <h6 className="text-blue"><strong>{product.price}.00</strong></h6>
        <h6 className="text-title text-uppercase text-muted mt-3 mb-2">Category: {product.categoryType}</h6>
        <p className="text-muted lead"><strong>Discount:{product.discount}<span>%</span></strong></p>
        <button class="btn btn-outline-success"><Link to={'/detail/'+product._id}>More Details</Link></button>
      </div>
    
      </div>
      </div>
      </div>
      )}

        
   </div>
   
  )
}
}



export default Products