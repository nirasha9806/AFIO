import React from 'react';
import { Menu} from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
      <a href="/home"><i class="fas fa-home">HOME</i></a>
      </Menu.Item>
      </Menu>
    )
  } else {

    return (

    <Menu mode={props.mode}>

        <Menu.Item key="dash"><a href = "/adminDashboard">DASHBOARD</a></Menu.Item>

    <SubMenu key="sub1" title={<span><span>CATEGORIES</span></span>}>
        <Menu.Item key="setting:1"><a href = "/category/upload"><i>Add Category</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/user/table"><i>View Category</i></a></Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title={<span><span>PRODUCTS</span></span>}>
        <Menu.Item key="setting:1"><a href = "/createProduct"><i>Add Product</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/productList"><i>View Product</i></a></Menu.Item>
    </SubMenu>
    <SubMenu key="sub3" title={<span><span>DELIVERY DETAILS</span></span>}>
        <Menu.Item key="setting:1"><a href = "/deliveryAdmin"><i>Delivery Details</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/orderHistory"><i>Delivery History</i></a></Menu.Item>
    </SubMenu>
    <SubMenu key="sub4" title={<span><span>LOYALTY CARDS</span></span>}>
        <Menu.Item key="setting:1"><a href = "/cardAdd"><i>Add Loyalty card</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/ListDetails"><i>View loyalty card</i></a></Menu.Item>
    </SubMenu>
    <Menu.Item key="sub5"><a href = "/adminFeedback">FEEDBACKS</a></Menu.Item>
  </Menu>

  )
}
}

export default withRouter(LeftMenu);