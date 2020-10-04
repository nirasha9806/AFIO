import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class V_Navbar extends Component {

  render() {
    return (

        <div className = "App">
            <br/>
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to = {'/create'} className="navbar-brand"> Gift And Vouchers</Link>
                <div className="collapse navbar-collapse ">
                <ul className ="navbar-nav mr-auto nav nav-tabs">
                    <li className="nav-item">
                    <Link to={'/create'} className="nav-link ">Create Voucher</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/edit/:id'} className="nav-link">Edit Voucher</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/list'} className="nav-link">Voucher List</Link>
                    </li>
                </ul>
                </div>
            </nav>

        </div>
        
    );
  }
}