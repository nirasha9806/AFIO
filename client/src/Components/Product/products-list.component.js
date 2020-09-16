import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import navbarComponent from './navbar.component';

const Product = props => (
  <tr>
    <td>{props.product.productName}</td>
    <td>{props.product.price}</td>
    <td>{props.product.discount}</td>
    <td>{props.product.categoryType}</td>
    <td>{props.product.description}</td>
    
    <td>
      <Link to={"/edit/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
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
    axios.delete('http://localhost:5000/products/'+id)
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

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
        <navbarComponent />
        <h3>Products</h3>
        <table className="table">
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