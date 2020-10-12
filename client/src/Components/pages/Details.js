import React, { Component } from 'react'
//import React, { Components } from 'react'
import {InfoConsumer} from '../context';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Reviews from '../Reviews'
//import styled from 'styled-components'
//import {detailInfo} from '../../data'

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
            { data => {
                const {
                    id ,
                    headerTitle,
                    hearderSubTitle,
                    headerText,
                    img,
                    title,
                    maps,
                    description

                   } = data.detailInfo;

                   return(
                    <React.Fragment>
                        <Navbar/>
                        <div className = "conteiner-fluid align-items-center">
                {/* <h1 className= "dispaly-1 font-weight-bold">{headerTitle}</h1>  
                <h4 className = "display-5"> {hearderSubTitle}</h4>
                <p> {headerText} </p> */}
                        <div className = "container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    <i className="fab fa-facebook"></i>
                                </div>
                                <div className="col-2">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className="col-2">
                                    <i className="fab fa-google "></i>
                                </div>
                                <div className="col-2">
                                    <i className="fab fa-reddit"></i>
                                </div>
                                <div className="col-2">
                                    <i className="fab fa-facebook-messenger"></i>
                                </div>
                                <div className="col-2">
                                    <i className="fab fa-snapchat"></i>
                                </div>
                            </div>

                        </div>
                       </div>
                       <div className ="container">
                           <ul className="nav nav-tabs">
                           <li className="nav-item">
                               <a href="#aboutItem" className="nav-link active" role="tab" 
                               data-toggle="tab">About Item</a>
                           </li>
                           <li className="nav-item">
                               <a href="#reviews" className="nav-link " role="tab" 
                               data-toggle="tab">Reviews</a>
                           </li></ul>
                           <div className="tab-content mb-5">
                               <div id="aboutItem" className="tab-pane in active text-center mt-5" role="tabpanel">
                   <h2 className="mb-3">{title}</h2>
                   <p>{description}</p>
                   <img src={img} alt={title} className="img-thumbail img-fluid"/>
                           </div>
                           <div className="tab-pane" id="reviews" role="tabpanel">
                               <Reviews/>
                           </div>
                           </div>
                       </div>
                       <Footer/>
                        </React.Fragment>
                );
                }}
             </InfoConsumer>
    );
}
}
export default Details;