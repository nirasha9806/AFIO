import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class viewAdmProfile extends Component {
    constructor(props) {
        super(props);
       
}

delete(){
    axios.delete('/api/users/delete/' +this.props.obj._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err));
    window.location.href = "/";
}
    
    render() { 

        return ( 

            <tr>
                 <td>
                   {this.props.obj.email}
                </td>
                 <td>
                   {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                 {this.props.obj.men}
                </td>
                <td>
                    {this.props.obj.women}
                </td>
                <td>
                    {this.props.obj.adults}
                </td>
                <td>
                    {this.props.obj.teenagers}
                </td>
                <td>
                    {this.props.obj.kids}
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
export default viewAdmProfile;

