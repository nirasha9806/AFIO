// import React,{Component} from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import Footer from '../layouts/Footer';
// import Navbar from '../layouts/Navbar';



// export default class PayPalDisplay extends Component{

//     constructor(props){
//         super(props);
//         this.state = {paypal : [],

//         } 
//     }

//     componentDidMount(){
      
//         axios.get('/api/paypal/'+this.props.match.params.password)
//         .then( res =>{
//             const paypal= res.data;
//             this.setState({paypal});
//         })
//         .catch(function(error){
//             console.log(error);
//         })
//     }
//     render(){
//         return(
//             <div className="App">
//             <Navbar/>
//             <br/><br/>
//                 <h3 align="center"> PayPal Details</h3>
//                 <table>
//                     <tr>
//                         <th>Customer Name</th>
//                         <th>Email Address</th>
//                         <th>Password</th>
//                         <th>Billing Address</th>
//                     </tr>

//                     {this.state.paypal.map(payp =>
//                     <tr>
//                         <td>{payp.cname}</td>
//                         <td>{payp.email}</td>
//                         <td>{payp.password}</td>
//                         <td>{payp.baddress}</td>
//                         <button className="btn btn-primary" onclick={() =>this.delete(payp._id)}>Remove</button>
//                         <button><Link to={"/update/"+payp._id }>Update</Link></button> 
//                     </tr>
//                     )}
//                 </table>
//                 <Footer/>
//             </div>
//         );
//     }
// }