/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">LOGIN</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">SIGNUP</a>
        </Menu.Item>
      </Menu>
    )
  } else {

    return (

      <Menu mode={props.mode}>

        <Menu.Item key="upload">
          <a href = "/category/upload">ADD CATEGORY</a>
        </Menu.Item>

        <Menu.Item key="table">
          <a href = "/user/table">VIEW CATEGORY</a>
        </Menu.Item>

      <SubMenu title={<span>ADMIN</span>}>
        <Menu.Item key="setting:1"><a href = "/admin/profile/:id">Profile</a></Menu.Item>
        <Menu.Item key="logout"><a onClick={logoutHandler}>Logout</a></Menu.Item>
      </SubMenu>

        {/* <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item> */}
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

