import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import Info from '../Info';
import App from '../../App.css'
import CustomSlider from '../slider'
import CustomSliders from '../slider02'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import {Link} from "react-router-dom";
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
                    <center>
    <button type = "button" className="btn btn-secondary btn-lg" ><Link to={"/user/profile/"+this.props.match.params.email+ "/" +this.props.match.params.password}>User Profile</Link></button></center>
                    </div>
                    <div className="userProfile">

                    {this.state.user.map( user =>
    <div>

      <div><button className="btn btn-secondary btn-lg"><Link to={'/product/'+user._id}>Product</Link></button></div><br></br>
      <div><button className="btn btn-secondary btn-lg"><Link to={'/displayDelivery/'+user._id}>Delivery Details</Link></button></div><br></br>

      <div><button className="btn btn-secondary btn-lg"><Link to={'/comment/'+user._id}>Add Feedbacks</Link></button></div>


    </div>
      
      )}
                    
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
export default HomePage;