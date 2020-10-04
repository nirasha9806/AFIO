import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';

class UpdateStatus extends Component {

    constructor(props){
        super(props)

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            status:''
        }
    }

    componentDidMount() {

        axios.get('/api/delivery/editStatus/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              status: res.data.status
            });
          })
          .catch(function (error){
            console.log(error);
          })
      }

      handleStatusChange = event => {
        this.setState( {
            status: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const Delivery = {
            status: this.state.status
        };

        axios.post('/api/delivery/update/'+this.props.match.params.id, Delivery)
        .then(response =>
            console.log(response.data));
            window.location = '/deliveryAdmin';
    }

    render() {
        return(

            <div className=" border border-secondary col-md-5 mt-3 mx-auto ">

                <br></br>

                <h3 className="h3 mb-3 font-weight-bold">Update Order Status</h3>

                <br></br>
                <Form className="needs-validation" onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <lable>Order Status : </lable> <br></br>
                        <input className="form-control" type='text' value={this.state.status} onChange ={this.handleStatusChange}/>
                    </div>

                    <center>
                        <Button className="btn btn-warning" onClick={this.onSubmit}> Update </Button>
                    </center>
                    
                    <br></br>

                </Form>
            </div>    
            
        )
    }

}

export default UpdateStatus