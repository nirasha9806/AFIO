import React, {Component, Suspense} from 'react'
import { Typography, Form, Input, Menu } from 'antd';
import CatFileUpload from '../utils/CatFileUpload'
import axios from 'axios';
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
const SubMenu = Menu.SubMenu;

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "Men" },
  { key: 2, value: "Women" },
  { key: 3, value: "Adults" },
  { key: 4, value: "Teenagers" },
  { key: 5, value: "Kids" },
  { key: 6, value: "Babies" }
]

class EditFormPage extends Component {
  constructor(props) {
      super(props);

      this.state = {

          images: [],
          categoryID: '',
          categoryName: '',
          categoryType: '',
          description: '',
          
        }
  }

  componentDidMount(){
  axios.get('/api/category/'+this.props.match.params.id)
      .then(response => {
          console.log(response.data);
          this.setState({
            images: response.data.images,
            categoryID: response.data.categoryID,
            categoryName: response.data.categoryName,
            categoryType:response.data.categoryType,
            description: response.data.description,
           
          });
          console.log(this.state.categoryID);
        
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  onIdChange = (event) => {
      this.setState({
        categoryID: event.currentTarget.value});
  }

   onCatNameChange = (event) => {
    this.setState({
      categoryName: event.currentTarget.value});
  }

   onDescriptionChange = (event) => {
    this.setState({
      description: event.currentTarget.value});
  }

   onContinentsSelectChange = (event) => {
    this.setState({
      categoryType: event.currentTarget.value});
  }

   onSubmit = (event) => {
    event.preventDefault();
   
    const obj = {
      images: this.state.images,
      categoryID: this.state.categoryID,
      categoryName: this.state.categoryName,
      categoryType: this.state.categoryType,
      description: this.state.description,
      subCategoryType: this.state.subCategoryType,
    }

    axios.put('/api/category/edit/' +this.props.match.params.id, obj)
    .then(response => {
        this.setState({
          message: response.data.message
        });
        console.log(response.data.message);
    }
    );

    this.setState({
          images: [],
          categoryID: '',
          categoryName: '',
          categoryType: '',
          description: '',
    });
    window.location.href = "/user/table";
  
  }

  updateImages = (newImages) => {
    console.log(newImages)
    this.setState({images: newImages})
  }
  
  render(){
  return (

    

    <>
     <Suspense fallback={(<div>Loading...</div>)}>
    <NavBar />
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

    <div>
    <div style = {{ maxWidth: '500px' , margin: '2rem auto' }}>
        <div style = {{ textAlign: 'center' , marginBottom: '2rem'}}>
            <h2><i> UPDATE CATEGORY </i></h2>
        </div>
      
        <Form onSubmit = {this.onSubmit}>
        
        {/* DropZone */}
        <CatFileUpload refreshFunction = {this.updateImages}/>


        <form>
        <Form.Item
          name="ID"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
           </Form.Item>
          <Input placeholder="Category ID" type = "name" onChange = {this.onIdChange}
          value = {this.state.categoryID}/>
       
        <Form.Item
          name="Name"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
           </Form.Item>
          <Input placeholder="Category Name" type = "name" onChange = {this.onCatNameChange}
          value = {this.state.categoryName}/>
        
      </form><br />

      <div class="input-field col s12">
        <label> Category Type </label><br />
        <select style={{ width: 480 , height: 32}}  value={this.state.categoryType} onChange = {this.onContinentsSelectChange}>
              {Continents.map(item => (
                <option key = {item.key} key = {item.value}> {item.value}
                </option>
        ))}
        </select>
        </div>
        <br />
        <br />

        <label> Description </label>
        <TextArea
          onChange = {this.onDescriptionChange}
          value = {this.state.description}
        />
        <br />
        <br />

        <div>
        <div style = {{ textAlign: 'left'}}>
            {/* <label> SubCategory Types </label> */}
        </div>

      </div>
    
        <br />

        <button type="primary" class="btn btn-dark" style={{ minWidth: '100%', height: 34}} 
          onClick = {this.onSubmit}
        >
           <b>Update</b>
           
        </button>

        </Form>

    </div>

  </div>
  </div>

  </Suspense>
  <Footer/>

    </>

  )
}
  
}

export default EditFormPage;