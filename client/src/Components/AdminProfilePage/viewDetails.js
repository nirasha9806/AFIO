import React, { Component, Suspense } from 'react';
import axios from 'axios';
import { Menu } from 'antd';
import TableRow from './viewAdmProfile';
import afio from '../UserProfilePage/UserImg/afio.png';
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
const SubMenu = Menu.SubMenu;

class viewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : []
          }
    }

    componentDidMount(){
        axios.get('/api/users/')
            .then(response => {

                this.setState({ user: response.data });
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.user.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    filterContent(user, searchTerm){
        const result= user.filter((users)=> users.email.includes(searchTerm));
        this.setState({ user: result });
      }

     handleTextSearch=(e)=>{

      console.log(e.currentTarget.value);
      const searchTerm = e.currentTarget.value;
      axios.get("/api/users")
      .then(response =>{
        const user = response.data;
        this.setState({ user });
        this.filterContent(user, searchTerm)
        
      })
    }

    render() { 
        return ( 

            <>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
            <center><div class="card" style={{width: '60rem', height: '38rem'}}>
            <center><img src={afio} alt ="afio" style ={{width:'350px'}} /> </center>

            <form class="form-inline d-flex justify-content-center md-form form-sm mt-0"style ={{ position: 'absolute', top: '23px', right: '15px'}}>
            <i class="fas fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-80" 
            type="text" 
            placeholder="Search User Details"
            name="searchTerm"
            onChange={this.handleTextSearch}
            aria-label="Search"></input>
            </form>

            <div class="card-body">
            <h5 class="card-title">----------------------MANAGE USER PROFILES----------------------</h5>
                        
                        <table class="table border shadow">
                        
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">E-mail</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Men</th>
                                <th scope="col">Women</th>
                                <th scope="col">Adults</th>
                                <th scope="col">Teenagers</th>
                                <th scope="col">Kids</th>
                        
                                <th scope="col">Delete Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.tabRow() }
                            </tbody>
                        
                        </table>
                    </div></div>
                </center>                    
               
            </div>
        </Suspense>
        <Footer/>
         </>

         );
    }
}
 
export default viewDetails;
