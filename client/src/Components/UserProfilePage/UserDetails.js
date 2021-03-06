import React, { Component, Suspense } from 'react';
import axios from 'axios';
import afio from '../UserProfilePage/UserImg/afio.png';
import { Menu } from 'antd';
import TableRow from './viewUserProfile';
import '../NavBarHome/Section/Navbar.css';
import NavBarHome from '../NavBarHome/NavBar';
import Footer from '../layouts/Footer';
const SubMenu = Menu.SubMenu;

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : []
          }
    }

    componentDidMount(){
        axios.get('/api/users/'+this.props.match.params.email)
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
            <NavBarHome />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                
            <center><div class="card" style={{width: '60rem', height: '28rem'}}>
            <center><img src={afio} alt ="afio" style ={{width:'700px'}} /> </center>
            <div class="card-body">
            <h4 class="card-title">USER PROFILE</h4>

            <table class="table border shadow">
                        
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">FIRST NAME</th>
                                <th scope="col">LAST NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">MEN</th>
                                <th scope="col">WOMEN</th>
                                <th scope="col">ADULTS</th>
                                <th scope="col">TEENS</th>
                                <th scope="col">KIDS</th>
                            
                                <th scope="col">DELETE ACCOUNT</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.tabRow() }
                            </tbody>
                        
                        </table>
            
            </div></div></center>
       
            

            </div>
        </Suspense>
        <Footer/>
         </>

         );
    }
}
 
export default UserDetails;
