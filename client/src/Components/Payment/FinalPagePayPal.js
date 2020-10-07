
import React,{Component} from 'react';
import Footer from '../layouts/Footer';
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import '../../CSS/mystyles.css';
import img1 from '../../Images/img1.webp';
import img2 from '../../Images/img2.webp';
import img5 from '../../Images/img3.webp';
import img7 from '../../Images/img7.webp';
import img8 from '../../Images/img8.webp';
import img3 from '../../Images/img3.webp';
import img4 from '../../Images/img4.webp';

import men1 from '../../Images/men1.jpeg';
import men2 from '../../Images/men2.jpeg';
import men3 from '../../Images/men3.jpeg';
import men4 from '../../Images/men4.jpeg';
import men5 from '../../Images/men5.jpeg';
import men6 from '../../Images/men6.jpeg';
import men7 from '../../Images/men7.jpeg';

import jsPDF from 'jspdf';

class FinalPagePayPal extends Component{
   constructor(props){
      super(props)

      this.state = {

      }

   }
  //retrieve the data
  // componentDidMount(){
      
  //  axios.get('/api/paypal/')
    //.then( res =>{
      //  const paypal= res.data;
        //this.setState({paypal});
    //})
    //.catch(function(error){
      //  console.log(error);

   // })
//}

   //jsPDf function
   jsPdfGenerator = () =>{
      //new document in jsPDF
      var doc = new jsPDF('p', 'pt');

      
      doc.autoTable({  html:'#my-table' })

      doc.text(40,40,'Total Amount Paid : ')
     
      doc.text(50,50,this.props.match.params.tot)


     doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
      margin: { top: 10 },
    })
    

      //save the document
      doc.save("invoice.pdf");
   }

    render(){
        return(
            <div className="App">
                 <Navbar/>
               ,     <br/><br/>
                    <div className = "gallery">  
                <img src = {men1} alt="men1" width={1000} height={800}  />
             </div>   
             <div className = "gallery">  
                <img src = {men2} alt="men2" width={1000} height={800}  />
             </div>    
             <div className = "gallery">  
                <img src = {men3} alt="men3" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {men4} alt="men4" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {men5} alt="men5" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {men6} alt="men6" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {men7} alt="men7" width={1000} height={800}  />
             </div>  

                  
             <br/><br/>  <br/><br/>  <br/><br/>
                    <br/><br/>  <br/><br/>  <br/><br/>
                    <h1>YOU HAVE SUCCESSFULLY DONE THE PAYMENTS</h1>
                    <br/>
                    <center><h3 style={{textAlign:'center'}}>THANK YOU! </h3></center>

                    <center><h2 style={{textAlign:'center'}} >You invoice here....</h2></center>
          <br></br>
          
                   <button className="btn btn-primary btn-lg" onClick={this.jsPdfGenerator}>Invoice</button>
                    <br/><br/>  <br/><br/>  <br/><br/>
                    <div className = "gallery">  
                <img src = {img1} alt="img1" width={1000} height={800}  />
             </div>   
             <div className = "gallery">  
                <img src = {img2} alt="img2" width={1000} height={800}  />
             </div>    
             <div className = "gallery">  
                <img src = {img3} alt="img3" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {img8} alt="img5" width={1000} height={800}  />
             </div> 
             <div className = "gallery">  
                <img src = {img4} alt="img5" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {img5} alt="img5" width={1000} height={800}  />
             </div>  
             <div className = "gallery">  
                <img src = {img7} alt="img5" width={1000} height={800}  />
             </div>  
            
                
             <br/><br/>  <br/><br/>  <br/><br/>
                   
                    <br/><br/>  <br/><br/>  <br/><br/>
                 <Footer/>

            </div>
        );
    } 
}
export default FinalPagePayPal;

