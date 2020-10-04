import React from 'react'
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';


function ANavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
  <Link className="navbar-brand ml-5" href="#">
    <img src={logo} alt ="logo" style ={{width:'35px'}}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span> <i className="fa fa-bars" aria-hidden="true" style={{ color: '#fff'}}/></span>
  </button>

  <div class="ml-auto">
    <h1 className="text-white text-uppercase">Admin</h1>
  </div>
  
</nav>

    );
}
export default  ANavbar;