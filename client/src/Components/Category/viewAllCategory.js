import React, { Component, Suspense} from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import TableRow from './EditCategoryPage';
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
import category from '../UserProfilePage/UserImg/category.png';
const SubMenu = Menu.SubMenu;

class ViewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : []
          }
    }

    componentDidMount(){
        axios.get('/api/category/')
            .then(response => {

                this.setState({ category: response.data });
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.category.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    jsPdfGeneratorAll = () => {

        var doc = new jsPDF('p', 'pt');
        doc.text(210,20,'ALL CATEGORY DETAILS')

        doc.setFont('courier')

        doc.autoTable({ html: 'table' })

        doc.save('CategoryAll.pdf')

}

        filterContent(category, searchTerm){
        const result= category.filter((category)=> category.categoryID.includes(searchTerm));
        this.setState({ category: result });
    }

        handleTextSearch=(e)=>{

        console.log(e.currentTarget.value);
        const searchTerm = e.currentTarget.value;
        axios.get("/api/category")
        .then(response =>{
        const category = response.data;
        this.setState({ category });
        this.filterContent(category, searchTerm)
    
    })
}

    render() { 
        return ( 

            <>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

            <div className="row">
              
                <div className="container">
                    <div  className="col-20 mt-5 ml-5 mr-5" >
            
                        <h2 align="center"><i>Category List</i></h2>

                        <img src={category} alt ="category" style ={{width:'150px', position: 'absolute', top: '80px', right: '5px'}} />

                        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-50" 
                        type="text" 
                        placeholder="Search Category Details"
                        name="searchTerm"
                        onChange={this.handleTextSearch}
                        aria-label="Search"></input>
                        </form><br />

                        <table class="table border shadow">
                        
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Iamge</th>
                                <th scope="col">CategoryID</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Category Type</th>
                                <th scope="col">Category Description</th>
                            
                                <th scope="col">Edit Action</th>
                                <th scope="col">Delete Action</th>
                                <th scope="col">Download PDF</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.tabRow() }
                            </tbody>
                        
                        </table>

                        <button onClick = {this.jsPdfGeneratorAll} type="button" class="btn btn-primary btn-lg btn-block">Download PDF</button>
   
                    </div>
                    
                </div>
               
            </div>

          
            </div>
        </Suspense>
        <Footer/>
         </>

         );
    }
}
 
export default ViewCategory;
