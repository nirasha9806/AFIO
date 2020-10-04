import React, { Component } from 'react'
import NewsCard from '../NewsCard';
import { InfoConsumer } from '../context';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

 class News extends Component {
    render() {
        return (
          <div>
              <Navbar/>
           <InfoConsumer>
               {value => {
                   return value.news.map(item => {
                       return <NewsCard key= {item.id} item ={item} />;
                   })
               }}
           </InfoConsumer>
           <Footer />
           </div>
        );
    }
}
export default News;