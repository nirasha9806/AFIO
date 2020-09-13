import React from 'react'
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
  <Link className="navbar-brand ml-5" href="#">
    <img src={logo} alt ="logo" style ={{width:'35px'}}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span> <i className="fa fa-bars" aria-hidden="true" style={{ color: '#fff'}}/></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/home">Home &nbsp; <i class="fas fa-home">
          </i><span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/news">News</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">Contact US</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/about">About US</Link>
      </li>
      
    </ul> 
    
    <li className="list-inline-item">
    
      <Link className="nav-link text-white text-uppercase ml-0" > &nbsp; <i class="fas fa-cart-plus">
          </i><span class="sr-only">(current)</span></Link>
       </li>
       <li className="list-inline-item">
      <Link className="nav-link text-white text-uppercase ml-0" > &nbsp; <i class="far fa-heart"></i>
      <span class="sr-only">(current)</span></Link>
       </li>
      <li className="list-inline-item">
      <Link className="nav-link text-white text-uppercase ml-0" > &nbsp; <i class="far fa-user">
          </i><span class="sr-only">(current)</span></Link>
       </li>
      
         
  </div>
</nav>

    );
}
export default  Navbar;