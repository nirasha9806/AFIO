import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import { Button } from 'react-bootstrap';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

class OrderHistory extends Component{

    constructor(props) {
        super(props)
               this.state = {
                orderhistories: [],
              }
            }

        //retrieve data
        componentDidMount() {
          axios.get('/api/delivery/displayHistory')
          .then(res => {
              const orderhistories = res.data;
              this.setState({ orderhistories });
            })
        }

        //pdf generating
      jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('p','pt');

        doc.autoTable({  html:'#my-table' })

        doc.autoTable({
          columnStyles: { europe: { halign: 'center' } }, 
          margin: { top: 10 },
        })

        //save the pdf
        doc.save("Delivery History.pdf");
      }


    render() {
        return (

          <div>
            <NavBar /><br></br><br></br><br></br><br></br>

        <div className="container">  <br></br>

         <center>
            <h1 className="h1 mb-3 font-weight-bold ">Delivery Histories</h1>
          </center>

          <br></br><br></br>

           <table id="my-table" class="table">
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Reciever's name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
            </tr>

            { this.state.orderhistories.map(history => 
            <tr>
                <td>{history.CId}</td>
                <td>{history.name}</td>
                <td>{history.email}</td>
                <td>{history.phone}</td>
                <td>{history.city}</td>
            </tr>
              )}
           
              

            </table>
          </div>
          <br></br>

          <center>
              <button className="btn-primary" onClick={this.jsPdfGenerator}>Download as a PDF</button>
          </center>

          <br></br><br></br><br></br>

          <Footer/>
          </div>
      );
      }



    }    

export default OrderHistory;