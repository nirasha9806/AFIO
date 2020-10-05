import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbarComponent extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/productList" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createProduct" className="nav-link">Add Product</Link>
          </li>     
                 
        </ul>
        </div>
      </nav>
    );
  }
}