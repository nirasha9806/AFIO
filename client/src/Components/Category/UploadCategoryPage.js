import React, {useState, Suspense} from 'react'
import { Typography, Button, Form, Input, Menu} from 'antd';
import CatFileUpload from '../utils/CatFileUpload'
import Axios from 'axios';
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';
const SubMenu = Menu.SubMenu;

 //Add category

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

function UploadCategoryPage(props) {

   const [values, setValues] = useState({ val: []});

      function createInputs() {
        return values.val.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''} style={{ width: 400 , height: 32}} onChange={handleChange.bind(i)} />
            <input type='button' value='remove' style={{ width: 100 , height: 32}} onClick={removeClick.bind(i)} /><br/>
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...values.val];
      vals[this] = event.target.value;
      setValues({ val: vals });
    }

    const addClick = () => {
      setValues({ val: [...values.val, '']})
    }

    const removeClick = () => {
      let vals = [...values.val];
      vals.splice(this,1);
      setValues({ val: vals });
    }

    const handleSubmit = event => {
      alert('A name was submitted: ' + values.val.join(', '));
      event.preventDefault();
    }

  const [IdValue, setIdValue] = useState("")
  const [CatNameValue, setCatNameValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [ContinentValue, setContinentValue] = useState(1)

  const [Images, setImages] = useState([])

  const onIdChange = (event) => {
      setIdValue(event.currentTarget.value)
  }

  const onCatNameChange = (event) => {
    setCatNameValue(event.currentTarget.value)
  }

  const onDescriptionChange = (event) => {
      setDescriptionValue(event.currentTarget.value)
  }

  const onContinentsSelectChange = (event) => {
      setContinentValue(event.currentTarget.value)
  }

  const updateImages = (newImages) => {
    setImages(newImages)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!IdValue || !CatNameValue || !DescriptionValue || !ContinentValue || !Images){
      return alert ('Fill all the fileds..')
    }

    const variables = {
      writer: props.user.userData_id,
      categoryID: IdValue,
      categoryName: CatNameValue,
      categoryType: ContinentValue,
      description: DescriptionValue,
      subCategoryType: values,
      images: Images,
    }
  
  Axios.post('/api/category/uploadCategory', variables)
    .then(response => {
        if(response.data.success) {
          alert('Category Details Successfully Uploaded..')
          props.history.push('/user/table')
        }else{
          alert('Failed to upload Category')
        }
    })

  }

  return (

    <>
        <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

    <div>
    <div style = {{ maxWidth: '500px' , margin: '2rem auto' }}>
        <div style = {{ textAlign: 'center' , marginBottom: '2rem'}}>
            <h2><i> CREATE CATEGORY</i></h2>
        </div>
      
        <Form onSubmit = {onSubmit}>
        
        {/* DropZone */}
        <CatFileUpload refreshFunction = {updateImages}/><br />

        <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          name="ID"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Category ID"  type = "name" onChange = {onIdChange}
          value = {IdValue}/>
        </Form.Item>

        <Form.Item
          name="Name"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Category Name"  type = "name" onChange = {onCatNameChange}
          value = {CatNameValue}/>
         </Form.Item>
        </Form.Item>
    
      <Form.Item>
        <label> Category Type </label><br />
        <select style={{ width: 500 , height: 32}} onChange = {onContinentsSelectChange}>
              {Continents.map(item => (
                <option key = {item.key} key = {item.value}> {item.value}
                </option>
        ))}
        </select>
        </Form.Item>
        
        <label> Description </label>
        <TextArea
          onChange = {onDescriptionChange}
          value = {DescriptionValue}
        />
        <br />
        <br />

        <div>
        <div style = {{ textAlign: 'left'}}>
            {/* <label> SubCategory Types </label> */}
        </div>
      
        <form onSubmit={handleSubmit}>
          {createInputs()}
          <input type='primary' value='Add Sub Category' class="btn btn-secondary" style={{ minWidth: '100%', height: 34}} onClick={addClick} />
      </form >

      </div>
    
        <br />

        <button type="primary" class="btn btn-dark" style={{ minWidth: '100%', height: 34}} onClick = {onSubmit}
        >
           <b>Add Category</b>
           
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

export default UploadCategoryPage;