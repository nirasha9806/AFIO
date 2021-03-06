import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../CSS/myStyle.css'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import V_Navbar from '../layouts/navbar.component';

export default class ListVoucher extends Component { //implemented class component

    constructor(props) {
        super(props);
    
        this.state = {
          vouchers: [],
        } //gonna one item
    }

    //get the all vouchers from database
    componentDidMount() {
        axios.get('/api/voucher')
          .then(res => {
            const vouchers = res.data;
            this.setState({ vouchers });
          })
    }
    
    //delete method
    delete(id) {
        axios.post('/api/voucher/delete/'+id)
          .then(response => {
           this.componentDidMount();
    });
    }

    //search part
    filterContent(vouchers, searchTerm){
      const result= vouchers.filter((voucher)=> voucher.searchField.includes(searchTerm));
      this.setState({ vouchers: result });
    }

    handleTextSearch=(e)=>{

      console.log(e.currentTarget.value);
      const searchTerm = e.currentTarget.value;
      axios.get("/api/voucher")
      .then(res =>{
        const vouchers = res.data;
        this.setState({ vouchers });
        this.filterContent(vouchers, searchTerm)
        
      })
    }

    render() {
        return(
          <div>

          <Navbar/>

          <div className="container">

              
          <div>
              <V_Navbar/><br/>
                <h3 className = 'header2'>
                    <center>
                        <b>CHECKOUT !</b>
                    </center>
                </h3>

                <div className ="col-md-5 mt-3 mx-auto">

                  <input 
                  className="form-control"
                  type="search"
                  placeholder="Search your voucher details by Amount"
                  name="searchTerm"
                  onChange={this.handleTextSearch}
                  ></input>
                  
                </div>

                <br/>

                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th>Number of vouchers</th>
                    <th>Amount (Rs.)</th>
                    <th>Type</th>
                    <th>Message</th>
                    <th>Special Note</th>
                    <th>Edit</th>
                    <th>Remove</th>
                    </tr>
                </thead>

                { this.state.vouchers.map(voucher =>
                  <tr>
                    <td>{voucher.number}</td>
                    <td>{voucher.searchField}</td>
                    <td>{voucher.radio1}</td>
                    <td>{voucher.message}</td>
                    <td>{voucher.note}</td>

                    <td>
                      <button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i><Link to={"/EditVoucher/"+voucher._id}> Update</Link>
                      
                      </button>
                    </td>

                    <td>
                     <button className="btn btn-danger btn-sm" 
                     onClick={ event => window.confirm("Are you sure you want to delete this voucher details?")
                      && this.delete(voucher._id)}><i className="fas fa-trash"></i> 
                     Remove 
                     </button>
                    </td>

                  </tr>

                )}
                </table>

                <br/><br/>

                <button type="button" value="Add Deliver Details" className="btn btn-dark" 
                 onClick={event =>  window.location.href='/deliveryInsert/:id'}
                 style ={{marginLeft:"873px"}}>
                 Add Deliver Details              
                </button>

                <br/><br/>

                <button type="button" value="Continue Shopping" className="btn btn-dark" 
                 onClick={event => window.location.href='/'}
                 style ={{marginLeft:"875px"}}>
                 Continue Shopping              
                </button>

              <br/><br/>
              </div>
              </div>
<Footer/>
            </div>



        )
    }
}