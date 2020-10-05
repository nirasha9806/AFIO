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

    render() { 
        return ( 

            <>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
            <center><div class="card" style={{width: '60rem', height: '38rem'}}>
            <center><img src={afio} alt ="afio" style ={{width:'350px'}} /> </center>
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
