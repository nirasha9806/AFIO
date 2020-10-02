import React, {Component} from 'react';
import { Button,Form} from 'react-bootstrap';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import '../../CSS/custome-style.css';
import axios from 'axios';


class DisplayDeliveryDetails extends Component{

    constructor(props) {
        super(props)
               this.state = {
                deliveries: [],
                Did:' ',
                Iemail:' '
              }
            }

            handleIemailChange = event => {
              this.setState({
                  Iemail: event.target.value
              })
          }

          handleDidChange = event => {
            this.setState({
                Did: event.target.value
            })
        }

            //Retrieve
              componentDidMount() {
                axios.get('/api/delivery/display/'+this.props.match.params.id)
                .then(res => {
                    const deliveries = res.data;
                    this.setState({ deliveries });
                  })
              }

        //to send data to order status requests
        onSubmit = (event) => {
          event.preventDefault();
  
          const RequestStatus = {
              Did: this.state.Did,
              Iemail: this.state.Iemail
          };
  
          axios.post('/api/delivery/insertRequest', RequestStatus)
              .then(response => {
                  if(response.data.success){
                      alert('Your Request send successfully')
                  } else {
                      alert('Please Try Again !!')
                  }
              })
          
      }   

      //insert data to OrderHistory collection
      onInsert(id,name,email,phone,city,cId){

        const OrderHistory = {
           DeliveryId:id,
           name:name,
           email:email,
           phone:phone,
           city:city,
           CId:cId
        };

        axios.post('/api/delivery/insertHistory', OrderHistory)
            .then(response => {
                if(response.data.success){
                    alert('Thank You for joining with us!!')
                } else {
                    alert('Please Try Again !!')
                }
            })
        
    }


    render() {
        return (

            <div>

              <Navbar />

              <div class="big-banner">

                <br></br><br></br><br></br><br></br><br></br>

                <center>
                  <h1 className="h1 mb-3 font-weight-bold text-white">Delivery Details</h1>
                </center>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
                <div className="container bg-light">

                  <br></br><br></br>

                      <p>Please click the "Confirm" button after recieving your order.</p>

                      <table class="table table-hover table-bordered">

                        <thead>
                        <tr>
                          <th scope="col">Delivery ID</th>
                          <th scope="col">Ordered Date</th>
                          <th scope="col">Reciever's Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Address</th>
                          <th scope="col"> </th>
                        </tr>
                        </thead>

                        <tbody>
                        { this.state.deliveries.map(delivery => 
                          <tr>
                            <td>{delivery._id}</td>
                            <td>{delivery.date && delivery.date.substring(0,10)}</td>
                            <td>{delivery.name}</td>
                            <td>{delivery.email}</td>
                            <td>{delivery.phone}</td>
                            <td>{delivery.address}</td>
                            <td><Button variant="dark"
                                onClick={() =>this.onInsert(delivery._id,delivery.name,delivery.email,delivery.phone,delivery.city,this.props.match.params.id)}>
                               <i class="fas fa-check-circle"></i>&nbsp; Confirm</Button></td>
                          </tr>
                          )}
                          </tbody>

                        </table>  

                    <br></br><br></br><br></br>

                      <div className="col-md-8 mt-3 mx-auto">

                        <p>
                          To track your order please enter your Delivery ID and Email address in the boxes below and press the "LookUp Order" button.
                          Your Delivery ID can be found in the table above.
                        </p>
                      </div>

                      <div className=" border border-secondary col-md-5 mt-3 mx-auto">

                        <br></br>

                        <Form className="needs-validation" onSubmit={this.onSubmit}>

                        <center>
                          <div className="form-group">
                            <input name="Did" className="form-control" type="text" placeholder="Enter your Delivery ID" onChange={this.handleDidChange}></input>
                          </div>
                          </center>

                          <br></br>

                          <center>
                          <div className="form-group">
                            <input name="Iemail" className="form-control" type="text" placeholder="Enter your email address" onChange={this.handleIemailChange}></input>
                          </div>
                          </center>

                          <br></br>

                          <center>
                            <Button variant="dark" onClick={this.onSubmit}> LookUp Order </Button>
                          </center>
                          
                          <br></br>

                        </Form>

                    </div>
                    <br></br>

                 </div>   

                </div>

                <br></br><br></br><br></br>

                <Footer/>
          </div>
          
      );
      }



    }    

export default DisplayDeliveryDetails