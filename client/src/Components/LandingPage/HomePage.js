import React, { Suspense, Component } from 'react'
import '../NavBarHome/Section/Navbar.css';
import NavBarHome from '../NavBarHome/NavBar';
import { withRouter, Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import axios from 'axios';

class HomePage extends Component{

  constructor(props){
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

<<<<<<< Updated upstream
  render(){
  return (

    <div>
     <Suspense fallback={(<div>Loading...</div>)}>
    <NavBarHome />
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
    <div style = {{ width: '80%', margin: '5rem auto' }}>
        <h1 style={{backgroundColor: "#e8dfdf", textAlign: 'center'}}><i><b> All Fashion In One (AFIO) </b></i></h1>
    </div>
    <center>
    <button type = "button" className="btn btn-secondary btn-lg" ><Link to={"/user/profile/"+this.props.match.params.email+ "/" +this.props.match.params.password}>User Profile</Link></button></center>
    </div>

    {this.state.user.map( user =>
    <ul>

      <li><button><Link to={'/product/'+user._id}>Product</Link></button></li><br></br>
      <li><button><Link to={'/displayDelivery/'+user._id}>Delivery Details</Link></button></li>

      <li><button><Link to={'/comment/'+user._id}>Add Feedbacks</Link></button></li>
=======
                        </div>
                     </div>
                    </div>
                   
                    <CustomSliders />
                    <div >
                    <center>
                    <button type = "button" className="btn btn-secondary btn-lg" ><Link to={"/user/profile/"+this.props.match.params.email+ "/" +this.props.match.params.password}>User Profile</Link></button></center>
                    </div>
                    <div className="userProfile">

                    {this.state.user.map( user =>
                    <ul>

                    <li><button className="btn btn-secondary btn-lg"><Link to={'/product/'+user._id}>Product</Link></button></li><br></br>
                    <li><button className="btn btn-secondary btn-lg"><Link to={'/displayDelivery/'+user._id}>Delivery Details</Link></button></li><br></br>
                    <li><button className="btn btn-secondary btn-lg"><Link to={'/comment/'+user._id}>Add Feedbacks</Link></button></li>

>>>>>>> Stashed changes

                    </ul>
      
<<<<<<< Updated upstream
      )}
    </Suspense>
    <Footer/>
    </div>
    
  )
  }
=======
                     )}
                    
                    </div>
                    </div>
                    <div>
                        <InfoConsumer>
                        {value => {
                        return    value.info.map(item => {
                            return <Info key ={item.id} item = {item} />;
                        });
                        } }
                    </InfoConsumer></div>
                </div>
                
                
                
                 </div>   
                 <Footer />    
             
        </div>
         );
    }
>>>>>>> Stashed changes
}

export default HomePage
