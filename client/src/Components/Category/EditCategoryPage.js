import React, { Component} from 'react';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {

    }
            
 }
            
    delete(){
        axios.delete('/api/category/delete/' +this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err));
        window.location.href = "/user/table";
    }
          
       
    jsPdfGenerator = () => {

        var doc = new jsPDF('p', 'pt');
        doc.text(220,20,'CATEGORY DETAILS')

        doc.setFont('courier')

        doc.autoTable({
            head: [['IMAGE', 'ID', 'NAME', 'TYPE', 'DESCRIPTION']],
            body: [
            [`${this.props.obj.images[0]}`, `${this.props.obj.categoryID}`, `${this.props.obj.categoryName}`, `${this.props.obj.categoryType}`, `${this.props.obj.description}`],
        
        ],
    })

        doc.save('Category.pdf')

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
                <td>
                <button onClick = {this.jsPdfGenerator} type="button" class="btn btn-secondary btn-sm">Download</button>
                </td></tr>

         );

    }

}
                
export default CategoryDetails;

