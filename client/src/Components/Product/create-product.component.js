import React, { Component, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import navbarComponent from './navbar.component';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    //refering this to component
    this.onChangeProductname = this.onChangeProductname.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: '',
      price: 0,
      discount: 0,
      categoryType: '',
      description: '',
      categories: [],
    }
  }

  componentDidMount() {
    axios.get('/api/categories/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data.map(category => category.categoryType),
            categoryType: response.data[0].categoryType
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

    console.log(product);       //submitting data to the database

    axios.post('/api/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/productList';      //redirecting back to the homepage(productlist page)
  }
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState ({
        selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:5000/products/add', fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
      }
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (

    <div>

      <Navbar />
      <div className="container">
      <navbarComponent />

      <h3>Add Product</h3>
      <form onSubmit={this.onSubmit}>
      <div>
        <br />
        <br />
        <label>Choose Image: </label> <input type="file" onChange={this.fileSelectedHandler} />
        <br />
        <br />
      </div>
      <div className="form-group"> 
          <label>Product Name: </label>
          <br />
          <input  type="text"
              required
              className="form-control"
              value={this.state.productName}
              onChange={this.onChangeProductname}
         />
        </div>
        <div className="form-group"> 
          <label>Price: </label>
          <br />
          <input  type="text"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
         />
        </div>
        <div className="form-group"> 
          <label>Discount: </label>
          <br />
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
          <input  type="textarea"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
         />
         <br />
        </div>           

        <div className="form-group">
          <input type="submit" value="Add Product" className="btn btn-primary" onClick={this.fileSelectedHandler} />
          <br /><br /><br />
        </div>
      </form>
      </div>

      <Footer />

    </div>
    )
  }
}