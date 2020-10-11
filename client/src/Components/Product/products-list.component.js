import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

const Product = props => (
  <tr>
    <td>{props.product.productName}</td>
    <td>{props.product.price}</td>
    <td>{props.product.discount}</td>
    <td>{props.product.categoryType}</td>
    <td>{props.product.description}</td>
    
    <td>
      <Link to={"/editProduct/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('/api/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('/api/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }


  //generating PDF
  jsPdfGenerator = () => {

    var doc = new jsPdf('p','pt');    //new document in jspdf
    
    doc.autoTable({  html:'#productList-table' })  

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
      margin: { top: 10 },
    })
    
    doc.save("Product list.pdf");    //saving PDF
  }


  render() {
    return (
      <div>
        <NavBar /> <br></br><br></br><br></br><br></br>

        <div className="container">
        <navbar />
   
        <div><br /></div>
        
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;

        <button className="btn-primary" onClick={this.jsPdfGenerator}>Download PDF</button>

        <h3>Products</h3>
        <br />
        <table id="productList-table" className="table">
          <thead className="thead-light">
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
        </div>

        <Footer />

      </div>
    )
  }
}