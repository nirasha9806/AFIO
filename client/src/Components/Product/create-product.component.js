import React, { Component, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Form } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import { number } from 'yup';
import { useForm } from 'antd/lib/form/Form';

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
      productNameError: '',

      price: 0,
      priceError: '',

      discount: 0,
      discountError: '',

      categoryType: '',

      description: '',
      descriptionError: '',

      categories: [],

      image: '',
    }
  }

  //retrieving all categories uploaded
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


  //validation
  validate = () => {
    let isError = false;
    const errors = {
      productNameError: '',
      priceError: '',
      discountError: '',
      descriptionError: ''
    };

    if(this.state.productName.length < 3) {
      isError = true;
      errors.productNameError = "Product name needs to be more than 2 characters long";
    }

    if(this.state.description.length < 5) {
      isError = true;
      errors.descriptionError = "Description needs to be more than 5 characters long";
    }

    if(isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  }


  //submitting data to db
  onSubmit(e) {
    e.preventDefault();

    //validate data before submitting to the db 
    const err = this.validate();
    if(!err){

      const product = {
        productName: this.state.productName,
        price: this.state.price,
        discount: this.state.discount,
        categoryType: this.state.categoryType,
        description: this.state.description, 
        image: this.state.image
      }

      //appending data 
      const fd = new FormData();
      fd.append('productName', this.state.productName);
      fd.append('price', this.state.price);
      fd.append('discount', this.state.discount);
      fd.append('categoryType', this.state.categoryType);
      fd.append('description', this.state.description);
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
      axios.post('/api/products/add/', fd)
        .then(res => {
          console.log(res.data);      //submitting data to the database
      });


      window.location = '/productList';      //redirecting back to the homepage(productlist page)
    }

  }


  //demo button method
  demo =() => { 

    //setState
    this.setState ({
        productName: "Reversible Sherpa-Lined Hooded Zip Jacket"
    })

    this.setState ({
        price: "8500"
    })

    this.setState ({
        discount: "5"
    }) 

    this.setState ({
      description: "Built-in hood, Long sleeves, Full-length zipper from hem to chin"
    }) 

  }
  

  //image handling part
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState ({
        selectedFile: event.target.files[0]
    })
  }



  render() {
    return (

    <div>

      <NavBar /> <br></br><br></br><br></br><br></br>
      <div className="container">

        <br />

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
                name="productName"
                required
                className="form-control"
                value={this.state.productName}
                onChange={this.onChangeProductname}
                
          />
          &emsp;
          <font color="#c40c18">{this.state.productNameError}</font>
          </div>

          <div className="form-group"> 
            <label>Price: (Rs.)</label>
            <br />
            <input  type="number"
                name="price"
                required
                className="form-control"
                value={this.state.price}
                onChange={this.onChangePrice}
          />
          </div>

          <div className="form-group"> 
            <label>Discount: </label>
            <br />
            <input  type="number"
                name="discount"
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
                name="description"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
          />
          &emsp;
          <font color="#c40c18">{this.state.descriptionError}</font>
          <br />
          </div>           

          <div className="form-group">

            <input type="submit" value="Add Product" className="btn btn-dark"  onClick={this.onSubmit}/>
            &emsp;
            <Button variant="primary" onClick={this.demo}>Demo</Button>

            <br /><br /><br />
          </div>
        </form>
      </div>

      <Footer />

    </div>
    )
  }
}