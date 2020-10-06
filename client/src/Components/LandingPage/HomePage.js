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
import axios from 'axios';
 class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
          user : []
        }
    }
    
    componentDidMount(){
      axios.get('/api/users/'+this.props.match.params.email)
          .then(response => {
    
              this.setState({ user: response.data });
              
          })
          .catch(function (error) {
              console.log(error);
          })
    }



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

                    {this.state.user.map( user =>
                        <div>

                    <div><a href={'/product/Men/'+user._id}><img src={men} class="img-fluid" alt="Responsive image"></img></a> </div> <br/><br/>
                    <div><a href={'/product/Women/'+user._id}><img src={women} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href={'/product/Kids/'+user._id}><img src={kids} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href={'/product/Bags and shoes/'+user._id}><img src={bags} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>
                    <div><a href={'/product/Jewellary and watches/'+user._id}><img src={jewellery} class="img-fluid" alt="Responsive image"/></a> </div> <br/><br/>

                    <br></br><br></br><br></br>

                    <div className="align-item-end justify-content-center mb-5">
                        <a href='/create'><img src={gift} class="img-fluid" alt="Responsive image"/></a>
                    </div>



                    <div class="btn-group" role="group" aria-label="Basic example" aria-label="First group">
                    <center>
                        <button type="button" class="btn btn-outline-primary" ><Link to={"/user/profile/"+this.props.match.params.email+ "/" +this.props.match.params.password}>User Profile</Link></button>
                    </center>
                    

                    
                        <div class="btn-group" role="group" aria-label="Basic example" aria-label="Second group">
                            <button type="button" class="btn btn-outline-primary" ><Link to={'/displayDelivery/'+user._id}>Delivery Details</Link></button>
                        </div>

                        <div class="btn-group" role="group" aria-label="Basic example" aria-label="Third group">
                            <button type="button" class="btn btn-outline-primary" ><Link to={'/comment/'+user._id}>Add Feedbacks</Link></button>
                        </div>

                        </div>
                        </div>
      
                    )}

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
export default HomePage;