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

    <SubMenu key="sub1" title={<span><span>CATEGORIES & PRODUCTS</span></span>}>
        <Menu.Item key="setting:1"><a href = "/category/upload"><i>Add Category</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/user/table"><i>View Category</i></a></Menu.Item>
        <Menu.Item key="setting:2"><a href = "/product/upload1"><i>Add Product</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/category/upload"><i>View Product</i></a></Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title={<span><span>OTHER</span></span>}>
        <Menu.Item key="setting:3"><a href = "/deliveryAdmin"><i>Delivery Details</i></a></Menu.Item>
        <Menu.Item key="setting:4"><a href = "/orderHistory"><i>Delivery History</i></a></Menu.Item>
        <Menu.Item key="setting:4"><i>Loyalty Card Details</i></Menu.Item>
    </SubMenu>
  </Menu>

  )
}
}

export default withRouter(LeftMenu);