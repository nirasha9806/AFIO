
import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import '../../CSS/mystyles.css';


export default class PayPalDisplay extends Component{

    constructor(props){
        super(props);
        this.state = {paypal : [],

        } 
    }

    componentDidMount(){
      
        axios.get('/api/paypal/'+this.props.match.params.password)
        .then( res =>{
            const paypal= res.data;
            this.setState({paypal});
        })
        .catch(function(error){
            console.log(error);

        })
    }

    //delete() method
    delete(id) {
        axios.post('/api/paypal/delete/'+id)
        .then(response => {
          alert("Deleted successfully");
          this.componentDidMount();
        });
    }
    render(){
        return(
            <div className="App">
            <Navbar/>
            <br/><br/>
                <h3 align="center"> PayPal Details</h3>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.paypal.map(paypal =>
                    <tr>
                        <td>{paypal.cname}</td>
                        <td>{paypal.email}</td>
                        <td>{paypal.password}</td>
                        
                        <button className="btn btn-primary" onclick={() =>this.delete(paypal._id)}>Remove</button>
                        <button><Link to={"/updatePayPal/"+paypal._id } style={{color:'white'}} className="btn btn-primary" >Update</Link></button>   
                    </tr>
                    )}
                    </tbody>
                </table>

                
                <Link to="/FinalPage"  value="Pay Rs." className="btn btn-primary"  onClick={this.onSubmit}>Pay</Link> 
                <br/>
                    <br/><br/>

                <Footer/>
            </div>
        );
    }
}

