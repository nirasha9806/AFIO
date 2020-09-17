import React from 'react'
import { Carousel } from 'antd';

function ImageSlideShow(props) {
  return (
    <div>
      
      <Carousel autoplay>
          {props.images.map((image, index) => (
              <div key = {index}>
                  <center><img style = {{ width: '80%', maxHeight: '250px'}} 
                    src = {`http://localhost:5000/${image}`} alt = "categoryImage"/>
               </center> </div>

        ))}

      </Carousel>

    </div>
  )
}

export default ImageSlideShow
