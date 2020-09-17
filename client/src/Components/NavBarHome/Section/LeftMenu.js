import React from 'react';
import { Menu} from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
      <a href="/home">HOME</a>
      </Menu.Item>
      </Menu>
    )
  } else {

    return (

    <Menu mode={props.mode}>
      
        <Menu.Item key="setting:1"><a href = "/home/:email/:password"><i class="fas fa-home">HOME</i></a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/category/upload">NEWS</a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/user/table">CONTACT US</a></Menu.Item>
        <Menu.Item key="setting:1"><a href = "/user/table">ABOUT US</a></Menu.Item>
  </Menu>
 
  )
}
}

export default withRouter(LeftMenu);