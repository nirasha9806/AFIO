import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import { Button } from 'react-bootstrap';

class StatusRequest extends Component {

    constructor(props) {
        super(props)
               this.state = {
                requeststatuses: []
              }
            }

            //Retrieve
            componentDidMount() {
                axios.get('/api/delivery/requestsRetrieve')
                .then(res => {
                    const requeststatuses = res.data;
                    this.setState({ requeststatuses });
                  })
              }

              //delete() method
                delete(id) {
                    axios.post('/api/delivery/deleteRequest/'+id)
                    .then(response =>
                        alert("Deleted"));
                        this.componentDidMount();
                }


              render() {
                return ( 
                 
                <div>

                   <NavBar />  <br></br><br></br><br></br><br></br>
                <div className="container">

                  <br></br>

                  <Button variant="dark"><Link class="badge badge-dark" to='deliveryAdmin' >Check Orders</Link></Button>

                  <br></br><br></br>

                  <center>
                    <h1 className="h1 mb-3 font-weight-bold ">Order Status Requests</h1>
                  </center>

                  <br></br><br></br>

                   <table class="table">
                    <tr>
                      <th scope="col">Delivery ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Remove</th>
                    </tr>
                    { this.state.requeststatuses.map(request => 
                      <tr>
                        <td>{request.Did}</td>
                        <td>{request.Iemail}</td>
                        <td><button className="btn btn-danger" onClick={() =>this.delete(request._id)}><i class="far fa-trash-alt"></i>&nbsp;Remove</button></td>
                        </tr>
                      )}
                    </table>

                    <br></br>
                    </div>

                    <br></br><br></br><br></br>

                    <Footer/>
                    </div>
                    )}

}

export default StatusRequest