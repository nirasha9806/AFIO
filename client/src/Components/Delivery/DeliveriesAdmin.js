import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import { Button } from 'react-bootstrap';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

class Deliveries extends Component{

    constructor(props) {
        super(props)
               this.state = {
                deliveries: [],
              }
            }

        //retrieve data
        componentDidMount() {
          axios.get('/api/delivery/displaytoAdmin')
          .then(res => {
              const deliveries = res.data;
              this.setState({ deliveries });
            })
        }

        //delete() method
      delete(id) {
          axios.post('/api/delivery/delete/'+id)
          .then(response => {
            alert("Deleted successfully");
            this.componentDidMount();
          });
      }

      //filterContent() method for search 
      filterContent(deliveries, searchDelivery){
        const result = deliveries.filter((delivery) => delivery._id.includes(searchDelivery));
        this.setState({deliveries:result});
      } 

      //handleSearch() for search
      handleSearch = (e) =>{
        console.log(e.currentTarget.value);
       const searchDelivery = e.currentTarget.value;

       axios.get('/api/delivery')
          .then(res => {
              const deliveries = res.data;
              this.setState({ deliveries });
              this.filterContent(deliveries, searchDelivery)
            })
      }

      //pdf generating
      jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('p','pt');

        doc.text(30,30,"Delivery Details")
        doc.autoTable({  html:'#my-table' })

        doc.autoTable({
          columnStyles: { europe: { halign: 'center' } }, 
          margin: { top: 10 },
        })

        //save the pdf
        doc.save("Delivery Details.pdf");
      }

    render() {
        return (

          <div>
            <NavBar /><br></br><br></br><br></br><br></br>

        <div className="container">

          <Button variant="dark"><Link class="badge badge-dark" to="checkRequests">Order Status Requests</Link></Button> 

          <br></br><br></br>
          <center>
            <h1 className="h1 mb-3 font-weight-bold ">Delivery Details</h1>
          </center>

          <br></br>
          
          <div className="col-md-5 mt-3 mx-auto">
            <input
              type="search"
              placeholder="Search"
              name="searchDelivery"
              className="form-control ml-2"
              onChange={this.handleSearch}
              ></input>
          </div>

          <br></br><br></br>

           <table id="my-table" class="table">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Zipcode</th>
              <th scope="col">Address</th>
              <th scope="col">Order Status</th>
              <th scope="col">Update Order Status</th>
              <th scope="col">Remove Details</th>
            </tr>

            { this.state.deliveries.map(delivery => 
              <tr>
                <td>{delivery.name}</td>
                <td>{delivery.email}</td>
                <td>{delivery.phone}</td>
                <td>{delivery.city}</td>
                <td>{delivery.zipcode}</td>
                <td>{delivery.address}</td>
                <td>{delivery.status}</td>
                <td><button className="btn btn-warning"><i className="fas fa-edit"></i><Link  to={"/update/"+delivery._id }>&nbsp;Update</Link></button></td>
                <td><button className="btn btn-danger" onClick={() =>this.delete(delivery._id)}>Remove</button></td>
                  
                </tr>
              )}

            </table>
          </div>
          <center>
              <button className="btn-primary" onClick={this.jsPdfGenerator}>Download as a PDF</button>
          </center>

          <br></br><br></br><br></br>

          <Footer/>
          </div>
      );
      }



    }    

export default Deliveries;