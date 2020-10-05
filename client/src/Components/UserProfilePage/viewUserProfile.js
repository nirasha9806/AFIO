import React, { Component } from 'react';
import axios from 'axios';

class viewUserProfile extends Component {
    constructor(props) {
        super(props);
       
}

delete(){
    axios.delete('/api/users/delete/' +this.props.obj._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err));
    window.location.href = "/home/:email/:password";
}
    
    render() { 

        return ( 
        
            <tr>
                 <td>
                    <h6>{this.props.obj.firstName}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.lastName}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.email}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.men}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.women}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.adults}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.teenagers}</h6>
                </td>
                <td>
                    <h6>{this.props.obj.kids}</h6>
                </td>
                
                <td>
                <p className="delete" onClick={event => window.confirm("Are you sure you want to delete this Account?") && this.delete()}>
                <i className="fas fa-trash" style={{paddingRight:"10px"}}></i>
                </p>   
                </td>
                
            </tr>
            
         );
    }
}
 
export default viewUserProfile;

