import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import Info from '../Info';
import App from '../../App.css'
import CustomSlider from '../slider'
import CustomSliders from '../slider02'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
 class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

            <div className ="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="">
                        <CustomSlider />
                        </div>
                        < br/>
                  
                    
                        <div className="banner my-3 p-5">
                        <div className="align-item-end justify-content-center mb-5">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        <button className="btn btn-primary mt-5">Send</button>
                
                        <div className="gift">

                        </div>
                     </div>
                    </div>
                   
                    <CustomSliders />
                    <div >
                        <h1>Our Products</h1>
                    </div>
                    <div className="userProfile">
                        <h6>User Profile</h6>
                        <button className="btn btn-primary mt-5">Send</button></div>
                    </div>
                    <div>
                        <InfoConsumer>
                        {value => {
                        return    value.info.map(item => {
                            return <Info key ={item.id} item = {item} />;
                        });
                        } }
                    </InfoConsumer></div>
                </div>
                
                
                
                 </div>   
                 <Footer />    
             
        </div>
         );
    }
}
export default Home;

