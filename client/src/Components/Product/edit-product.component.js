import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);


    this.state = {
      productName: '',
      price: 0,
      discount: 0,
      categoryType: '',
      description: '',
      categories: []
    }

    //refering this to component
    this.onChangeProductname = this.onChangeProductname.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/products/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        productName: response.data.productName,
        price: response.data.price,
        discount: response.data.discount,
        categoryType: response.data.categoryType,
        description: response.data.description,
      });   
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get('/api/categories/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data.map(category => category.categoryType),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeProductname(e) {
    this.setState({
      productName: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeDiscount(e) {
    this.setState({
      discount: e.target.value
    })
  }

  onChangeCategoryType(e) {
    this.setState({
      categoryType: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      productName: this.state.productName,
      price: this.state.price,
      discount: this.state.discount,
      categoryType: this.state.categoryType,
      description: this.state.description,      
    }

    console.log(product);

    axios.post('/api/products/update/' + this.props.match.params.id, product)
      .then(res => console.log(res.data));

    window.location = '/productList';
  } 

  render() {
    return (
    <div>

      <Navbar />
      <div className="container">
 
      <br />

      <h3>Edit Product</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Product Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.productName}
              onChange={this.onChangeProductname}
         />
        </div>

        <div className="form-group"> 
          <label>Price: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
         />
        </div>

        <div className="form-group"> 
          <label>Discount: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.discount}
              onChange={this.onChangeDiscount}
         />
        </div>

        <div className="form-group"> 
          <label>Category Name: </label>
          <select ref="categoryInput"
              required
              className="form-control"
              value={this.state.categoryType}
              onChange={this.onChangeCategoryType}>
              {
                this.state.categories.map(function(category) {
                  return <option 
                    key={category}
                    value={category}>{category}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
         />
        </div>   
  

        <div className="form-group">
          <input type="submit" value="Edit Product" className="btn btn-primary" />
        </div>
      </form>

      </div>

      <Footer />
      
    </div>
    )
  }
}