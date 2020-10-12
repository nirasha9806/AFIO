import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import jsPdf from 'jspdf'
import 'jspdf-autotable'


//Stating each product details 
const Product = props => (
  <tr>
    <td><img style = {{ minWidth: '50px' , width: '50px' , height: '60px'}} src={`http://localhost:5000/${props.product.image}`} /></td>
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

  //initializing the states
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }


  //retrieving all products
  componentDidMount() {
    axios.get('/api/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  //delete function
  deleteProduct(id) {
    axios.delete('/api/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }


  //Retrieve products in a loop
  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }


  // ---- Search function ----

  filterContent(product, searchTerm){
    const result= product.filter((products)=> products.productName.includes(searchTerm));
    this.setState({ products: result });
  }

  handleSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get("/api/products")
    .then(response =>{
    const product = response.data;
    this.setState({ product });
    this.filterContent(product, searchTerm)

    })
  }


  //generating PDF
  jsPdfGenerator = () => {

    var doc = new jsPdf('p','pt');    //new document in jspdf
    

    doc.text(210,30,"All products details")
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

        <br /><br />
        <h3>Products</h3>
        <br />
          
        <div className="col-md-5 active-cyan-4 mb-4">
          <input
            type="search"
            placeholder="Search"
            name="searchProduct"
            className="form-control ml-2"
            onChange={this.handleSearch}
          ></input>
        </div>


        <table id="productList-table" className="table">
          <thead className="thead-light">
            <tr>
              <th>Image</th>
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