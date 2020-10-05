import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

 class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div text="center" className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                    <h1>Oops!</h1>
                    <h2> Error 404 Not Found</h2>
                    <div className="error-details">
                sorry,an error occerd
                 </div>  
                 <div className="error-actions">
                    <Link to ="/home" className ="btn btn-outline-primary btn-lg">
                       <i className="fas fa-home"/>&nbsp;Back To main
                        </Link> 
                        <Link to = "/google.com" className ="btn btn-outline-secondary btn-lg">
                       <i className="fas fa-envelope"/>&nbsp;Support
                        </Link> 
                     </div>              
             </div>
         </div>
    </div>  
 </div>
 <Footer />
 </div>
               
            
        );
    }
}
export default NotFoundPage;
