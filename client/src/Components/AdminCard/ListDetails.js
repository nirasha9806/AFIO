import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';
import 'jspdf-autotable'

export default class ListDetails extends Component { //implemented class component

    constructor(props) {
        super(props);
    
        this.state = {
        loyaltycardadds: [],
        } //gonna one item
    }

     //get the all vouchers from database
     componentDidMount() {
        axios.get('/api/LoyaltyCard/display')
          .then(res => {
            const loyaltycardadds = res.data;
            this.setState({ loyaltycardadds });
          })
          .catch(function(error){
                console.log(error);
          })
    }

    //delete() method
    delete(id) {
        axios.post('/api/LoyaltyCard/delete/'+id) // meke e kalla ghpu thana ko
        .then(response => {
          alert("Deleted successfully");
          this.componentDidMount();
        });
    }
  //filterContent() method for search 
  filterContent(loyaltycardadds, searchLoyalty){
    const result = loyaltycardadds.filter((loyaltycardadds) => loyaltycardadds.cardType.includes(searchLoyalty));
    this.setState({loyaltycardadds:result});
  } 

  //handleSearch() for search
  handleSearch = (e) =>{
    console.log(e.currentTarget.value);
   const searchLoyalty = e.currentTarget.value;

   axios.get('/api/LoyaltyCard')
      .then(res => {
          const loyaltycardadds = res.data;
          this.setState({ loyaltycardadds });
          this.filterContent(loyaltycardadds, searchLoyalty)
        })
  }
//pdf generating
jsPdfGenerator = () => {

  //new document in jspdf
  var doc = new jsPDF('p','pt');

  doc.text(30,30,"Loyalty Card Details")
  doc.autoTable({  html:'table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } }, 
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Loyalty Card Details.pdf");
}
  
    

    render() {
        return(
            <div>
               <NavBar /> <br></br><br></br><br></br><br></br>
                <h3 className = 'header2'>
                    <center>
                        <b>CHECKOUT !</b>
                    </center>
                </h3>
                <div className="col-md-5 mt-3 mx-auto">
            <input
              type="search"
              placeholder="Search"
              name="searchLoyalty"
              className="form-control ml-2"
              onChange={this.handleSearch}
              ></input>
              <br></br>
          </div>
                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th>Type of card</th>
                    <th>Discount</th>
                    
                    </tr>
                </thead>

                { this.state.loyaltycardadds.map( loyaltycardadds =>
                  <tr>
                    <td>{ loyaltycardadds.cardType}</td>
                    <td>{loyaltycardadds.discount}</td>
                    <td><button className="btn btn-warning"><i className="fas fa-edit"></i><Link  to={"/updateLoyalty/"+loyaltycardadds._id }>&nbsp;Update</Link></button></td>
                    <td><button className="btn btn-danger" onClick={() =>this.delete(loyaltycardadds._id)}>Remove</button></td>

                  </tr>

                )}
                </table>
                <center>
                <button className="btn-dark" onClick={this.jsPdfGenerator}>Download PDF</button>
                </center>

              <br/><br/>
                    <Footer/>
            </div>



        )
    }
}