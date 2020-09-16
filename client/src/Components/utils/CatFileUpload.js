import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
//import { Icon } from 'antd';
import Axios from 'axios';

function CatFileUpload(props) {

  const [Images, setImages] = useState([])
  const onDrop = ( files ) => {

      let formData = new FormData();
      const config = {
          header: {'content-type': 'multipart/form-data'}
      }
      formData.append("file", files[0])

      //save the images

      Axios.post('/api/category/uploadImage', formData, config)
      .then(response => {
          if(response.data.success){

              setImages([...Images, response.data.image])
              props.refreshFunction([...Images, response.data.image])

          }else {
              alert('Failed to save the image')
          }
      })

  }

  const onDelete = (image) => {

    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
    props.refreshFunction(newImages)
      
  }

  return (

    <div style = {{ display:'flex', justifyContent:'space-between '}}>
        <Dropzone
            onDrop = {onDrop}
            multiple = {false}
            maxSize = {800000000}
        > 
            {({getRootProps, getInputProps}) => (
                <div style = {{width:'220px', height:'300px', border:'1px solid black',
                    display:'flex', alignItems:'center', justifyContent:'center'}}
                    {...getRootProps()} 
                    >
                        <input {...getInputProps()} />
                        {/*<Icon type = "plus" style = {{ fontSize: '3rem'}} />*/}

                </div>
            )}
        
            </Dropzone> 

        <div style = {{ display:'flex', width:'300px', height:'310px', overflowX:'scroll' }}>

        {Images.map((image, index) => (
        <div onClick = {() => onDelete(image)}>
          <img style = {{ minWidth: '300px' , width: '300px' , height: '400px' }} src = {`http://localhost:5000/${image}` } alt = {`categoryImg-${index}`}/>
        </div>

))}

    </div>    
    </div>

  )
}

export default CatFileUpload
