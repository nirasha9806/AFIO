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
          //SubCategoryType: [],

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
            // subCategoryType: response.data.subCategoryType,.
           
          });
          console.log(this.state.categoryID);
        
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  //  const [values, setValues] = useState({ val: []});

    // createInputs = () => {
    //     return this.map((el, i) =>
    //       <div key={i}>
    //         <input type="text" value={el||''} style={{ width: 400 , height: 32}} onChange={this.handleChange.bind(i)} />
    //         <input type='button' value='remove' style={{ width: 100 , height: 32}} onClick={this.removeClick.bind(i)} /><br/>
    //       </div>
    //     );
    //   }

    // handleChange(event) {
    //   let vals = [...this.state.val];
    //   vals[this] = event.target.value;
    //   this.setState({ val: vals });
    // }

    // addClick = () => {
    //   this.setState({ val: [...this.state.val, '']})
    // }

    //  removeClick = () => {
    //   let vals = [...this.state.val];
    //   vals.splice(this,1);
    //   this.setState({ val: vals });
    // }

    //  handleSubmit = event => {
    //   alert('A name was submitted: ' + this.state.val.join(', '));
    //   event.preventDefault();
    // }

  // const [IdValue, setIdValue] = useState("")
  // const [CatNameValue, setCatNameValue] = useState("")
  // const [DescriptionValue, setDescriptionValue] = useState("")
  // //const [PriceValue, setPriceValue] = useState(0)
  // const [ContinentValue, setContinentValue] = useState(1)

  // const [Images, setImages] = useState([])

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

  // const onPriceChange = (event) => {
  //     setPriceValue(event.currentTarget.value)
  // }

   onContinentsSelectChange = (event) => {
    this.setState({
      categoryType: event.currentTarget.value});
  }

   onSubmit = (event) => {
    event.preventDefault();
   
    // if (!IdValue || !CatNameValue || !DescriptionValue || !ContinentValue || !Images){
    //   return alert ('Fill all the fileds..')
    // }

    const obj = {
      //writer: props.user.userData_id,
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
          //subCategoryType: []
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

        {/* <form onSubmit={this.handleSubmit}> */}
          {/* {this.createInputs()} */}
          {/* <input type='primary' value={this.state.SubCategory} class="btn btn-secondary" style={{ minWidth: '100%', height: 34}} onClick={this.addClick} /> */}
          {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}

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