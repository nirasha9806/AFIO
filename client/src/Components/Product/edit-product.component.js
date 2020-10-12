import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar/NavBar';
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
      categories: [],
      image: '',
    }

    //refering this to component
    this.onChangeProductname = this.onChangeProductname.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //retrieving all products and categories uploaded
  componentDidMount() {
    axios.get('/api/products/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        productName: response.data.productName,
        price: response.data.price,
        discount: response.data.discount,
        categoryType: response.data.categoryType,
        description: response.data.description,
        image: response.data.image,
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

    //image handling part
    state = {
      selectedFile: null
    }
  
    fileSelectedHandler = event => {
      this.setState ({
          selectedFile: event.target.files[0]
      })
    }
  


  //submitting data to db
  onSubmit(e) {
    e.preventDefault();

    const product = {
      productName: this.state.productName,
      price: this.state.price,
      discount: this.state.discount,
      categoryType: this.state.categoryType,
      description: this.state.description,   
      image: this.state.image,   
    }


    axios.post('/api/products/update/' + this.props.match.params.id, product)
      .then(res => {
        console.log(res.data);    //submitting edited data to the database
      });

    window.location = '/productList';   //redirecting back to the homepage(productlist page)
  } 


  

  render() {
    return (
    <div>

      <NavBar />
      <div className="container">
 
      <br /><br /><br /><br /><br />

      <h3>Edit Product</h3>

      <br /><br />

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
          <label>Price: (Rs.) </label>
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
          <br />
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
         />
        </div>   

        <br /><br />

        <div className="form-group">
          <input type="submit" value="Edit Product" className="btn btn-dark"  />
        </div>
      </form>

      </div>

      <br />

      <Footer />
      
    </div>
    )
  }
}