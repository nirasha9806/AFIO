import React, { Component } from 'react'
import {InfoConsumer} from '../context';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

 class Details extends Component {
    render() {
        return (
           <InfoConsumer>
               { data => {
                   const{
                    
                    id ,
                    headerTitle,
                    hearderSubTitle,
                    headerText,
                    img,
                    title,
                    maps,
                    description,

                   } = data.detailInfo;

                   return(
                       <React.Fragment>
                           <div className = "conteiner-fluid align-items-center">
                   <h1 className= "dispaly-1 font-weight-bold">{headerTitle}</h1>  
                   <h4 className = "display-5"> {hearderSubTitle}</h4>
                   <p> {headerTitle} </p>
                          </div>
                           </React.Fragment>
                   );
               }}
            </InfoConsumer>
        );
    }
}
export default Details;