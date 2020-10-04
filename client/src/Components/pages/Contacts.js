import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

 class Contacts extends Component {
    render() {
        return (
            <div>
                <Navbar />
           <section className = "my-5 py-5">
               <div className ="container">
                   <div className ="well well-sm">
                       <h3><strong>Our Location</strong></h3>
                      
                    </div>
                    <div className ="row">
                        <div className= "col-md-7">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1CICbNB9z7nu9tcdN_dMurTPMRX7FvuyV" style = {{
                            border: '0',
                            width: '100%',
                            height: '315px',
                            frameborder:'0'
                        }}allowFullscreen/>
                            </div>
                            <div className= "col-md-5">
                                <h4><strong>Contact us</strong></h4>
                                <form>
                                    <div className = "form-group">
                                     <input type="text" className="form-control"
                                     placeholder="Name"/>
                                     </div>   
                                     <div className = "form-group">
                                     <input type="email" className="form-control"
                                     placeholder="Email"/>
                                     </div> 
                                     <div className = "form-group">
                                     <input type="tel" className="form-control"
                                     placeholder="phone"/>
                                     </div> 
                                       <textarea className= "form-control" cols ="30" rows ="3"
                                        placeholder="Message"></textarea>
                                        <Link className="btn btn-outline-primary text-uppercase mt-2">
                                          <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        
                                          &nbsp;Send
                                            </Link>
                                     </form>
                                     </div>
                         </div>
                        
                    </div>
                </section>
                <Footer />
                </div>
        );
    }
}
export default Contacts;