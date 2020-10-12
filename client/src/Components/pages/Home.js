import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import Info from '../Info';
import App from '../../App.css'
import CustomSlider from '../slider'
import CustomSliders from '../slider02'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import men from '../../Images/men.jpg';
import women from '../../Images/women.jpg';
import kids from '../../Images/kids.jpg';
import bags from '../../Images/bags.jpg';
import jewellery from '../../Images/jewellery.png';
import gift from '../../gift.jpg'
import { Link } from 'react-router-dom';


 class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

            <div className ="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="">
                            <br></br>
                        <CustomSlider />
                        </div>
                  
                    <br></br><br></br><br></br>             
                   
                    <CustomSliders />

                    <br></br><br></br><br></br>
                    <center>
                        <h1>Shop now</h1>
                    </center>

                    <br></br>

                    <div><a href='/login'><img src={men} class="img-fluid" alt="Responsive image"></img></a> </div> <br/><br/>
                    <div><a href='/login'><img src={women} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href='/login'><img src={kids} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href='/login'><img src={bags} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href='/login'><img src={jewellery} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>

                    <br></br><br></br><br></br>

                    <div className="align-item-end justify-content-center mb-5">
                        <a href='/create'><img src={gift} class="img-fluid" alt="Responsive image"/></a>
                    </div>

                    <div>
                    
                    <h1 className="color:primary">HERE TOU CAN GET YOUR MASK FROM US !!!.</h1>
                        
                        <div className="align-item-end justify-content-center mb-8">
                            <img src="img/mask2.jpg"  class="img-fluid" alt="Responsive image" />
                            <h4>Price 250/=</h4>
                        </div>
                        <div className="align-item-end justify-content-center mb-8">
                            <img src="img/mask3.jpg"  class="img-fluid" alt="Responsive image"/>
                            <h4>Price 110/=</h4>
                        </div>
                        <div className="align-item-end justify-content-center mb-8">
                            <img src="img/mask4.jpg"  class="img-fluid" alt="Responsive image"/>
                            <h4>Price 300/=</h4>
                        </div>
    
                    </div>
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

