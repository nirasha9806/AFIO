import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import jsPdf from 'jspdf'
import 'jspdf-autotable'

//import Cart from '../../backend/models/Cart';

class Cart extends Component{

  constructor(props) {
    super(props)
           this.state = {
            carts: [],
            size:'',
            quantity:'',
            price:'',
          }
        }


      //retrieve data
      componentDidMount() {
        axios.get('/api/Cart')
        .then(res => {
            const carts = res.data;
            this.setState({ carts });
          })
      }

      //Delete Method
      delete(id){
        axios.post('/api/Cart/delete/'+id)
        .then(response =>{
          alert("deleted")
          this.componentDidMount();
        });
}

 //pdf generating
 jsPdfGenerator = () => {

  //new document in jspdf
  var doc = new jsPdf('p','pt');

  
  doc.autoTable({  html:'#my-table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } }, 
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Cart.pdf");
}


/*edit*/ 
          render(){
            return(
              <div>
              <div className="container py-5 ">
              <table id="my-table" class="table table-hover">
                <thead className="table-active">
                  <tr>
                  <th >Product Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Edit items</th>
                  <th>Remove item</th>
                </tr>
                </thead>

                { this.state.carts.map(Cart =>

                <tr>
                  <td >{Cart.productName}</td>
                  <td>{Cart.size}</td>
                  <td>{Cart.quantity}</td>
                  <td>{Cart.price}</td>
                  <td><button className="btn btn-warning"><Link  to={"/updateCart/"+Cart._id }>EDIT</Link></button></td>
                  <td><button className="btn btn-danger" onClick={() => this.delete(Cart._id)}>REMOVE</button></td>
                </tr>
                )}
              </table>

              <button class="btn btn-outline-success">Add Delivary Details</button>
              </div>
              <button className="btn-primary" onClick={this.jsPdfGenerator}>Download as a PDF</button>
              </div>

                  
            )
          }
          }
          export default Cart;
