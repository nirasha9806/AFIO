import React, { Component } from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

 class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
               <center> <h2>AFIO</h2></center>
           <p class="text-center" ><h1>What Makes a Great About Us Page?</h1></p>
           <p class="text-center"><h2>Your About Us page should be:</h2>
            <img src ="../../../img/home.jpg"></img>
<p class="text-center" ><h4>Informative. It doesn’t always have to tell your whole story, but it should at least provide people with an idea of .
Contain social proof, testimonials, and some personal information that visitors can relate to, such as education, family, etc</h4></p>
           </p>
           <Footer />
            </div>
        )
    }
}
export default About;