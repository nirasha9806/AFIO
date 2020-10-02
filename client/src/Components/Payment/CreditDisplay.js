import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import ListCreditData from './ListCreditData';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';


export default class CreditDisplay extends Component{

    constructor(props){
        super(props);
        this.state = {card : [],
        } 
    }
    

    componentDidMount(){
      
        axios.get('/api/payment/'+this.props.match.params.pin)
        .then( res =>{
            const card = res.data;
            this.setState({card });
        })
        .catch(function(error){
            console.log(error);
        })
    }
    //delete() method
    delete(id) {
        axios.post('/api/payment/delete/'+id)
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
                <h3 align="center">Card Payment Details</h3>
                <table>
                   <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Type of Card</th>
                        <th>Name of Issuer</th>
                        <th>CVC</th>
                        <th>Expiry date</th>
                        <th>Pin number</th>
                        <th>Card Holder</th>
                      
                    </tr>
                    </thead> 
                    <tbody>
                    {this.state.card.map(card =>
                    <tr>
                        <td>{card.cname}</td>
                        <td>{card.bankname}</td>
                        <td>{card.cardType}</td>
                        <td>{card.CVC}</td>
                        <td> {card.expiry}</td>
                        <td>{card.pin_number}</td>
                        <td>{card.cardName}</td>
                        <button className="btn btn-primary" onclick={() =>this.delete(card._id)}>Remove</button>
                        <button><Link to={"/update/"+card._id } style={{color:'white'}} className="btn btn-primary"  >Update</Link></button>   
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