import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryDetails extends Component {
    constructor(props) {
        super(props);
       
}

delete(){
    axios.delete('/api/category/delete/' +this.props.obj._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err));
    window.location.href = "/user/table";
}
    
    render() { 
        return ( 
            <tr>
                <td>
                  <div >
                  <img  style = {{ minWidth: '50px' , width: '50px' , height: '60px' }} src={`http://localhost:5000/${this.props.obj.images[0]}`} alt={`productImg-${0}`} /> 
                  </div>
                </td>
                <td>
                    {this.props.obj.categoryID}
                </td>
                <td>
                    {this.props.obj.categoryName}
                </td>
                <td>
                    {this.props.obj.categoryType}
                </td>
                <td>
                    {this.props.obj.description}
                </td> 
                <td>
                <Link to={"/edit/" + this.props.obj._id } className="edit"><i className="fas fa-edit" style={{paddingRight:"10px"}}></i></Link>
                </td>
                <td>
                <p className="delete" onClick={event => window.confirm("Are you sure you want to delete this Category?") && this.delete()}>
                <i className="fas fa-trash" style={{paddingRight:"10px"}}></i>
                </p>   
                </td>
                
            </tr>
         );
    }
}
 
export default CategoryDetails;

