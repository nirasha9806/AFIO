import React, { useEffect, useState, Suspense } from 'react'
import Axios from 'axios'
import { Col, Card, Row, Menu } from 'antd';
import ImageSlideShow from '../utils/ImageSlideShow';
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';

const SubMenu = Menu.SubMenu;
const { Meta } = Card;

function LandingPage() {

    const [categories, setcategories] = useState([])

    useEffect(() => {
        Axios.post ('api/category/getCategory')
        .then(response => {
            if(response.data.success){

                setcategories(response.data.categories)
                console.log(response.data.categories)

            }else{
                alert ('Failed to fetch category data..')
            }
        })
    })

    const renderCards = categories.map((category, index ) => {

        return <Col lg = {6} md = {8} xs = {24}>
            <Card 
                hoverable = {true}
                cover = {<ImageSlideShow images = {category.images}/>}
            >

            <Meta
                description = {category.description}
            />

            </Card>
        </Col>

    })


    return (

        <>
        <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

        <div style = {{ width: '80%', margin: '5rem auto' }}>

        <h1 style={{backgroundColor: "#e8dfdf", textAlign: 'center'}}> <i><b>ADMIN DASHBOARD </b></i></h1>

            <h6><i>Category Items</i></h6><br />

            {categories.length === 0 ?
            <div style = {{display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center'}}>   
            <h2> No category image yet...</h2>
            </div>   : 

            <div>

                <Row gutter = {[16,16]}>
                    
                    {renderCards}
                </Row>


            </div>
    
        }

        <br /><br />

            </div>
            </div>
    </Suspense>
    <Footer/>
    </>

    )
}

export default LandingPage
