import React, { useState , Suspense } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Checkbox, Menu, Typography } from 'antd';
import { useDispatch } from "react-redux";
import '../NavBar/Sections/Navbar.css';
import NavBar from '../NavBar/NavBar';
const SubMenu = Menu.SubMenu;

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (

    <>
    <Suspense fallback={(<div>Loading...</div>)}>
    <NavBar />
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

    <Formik
      initialValues={{
        //email: initialEmail,
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid E-mail address..')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess  ) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }

                if(response.payload.userType === "User")
                {
                  props.history.push("/home/" + values.email +"/"+ values.password );
                }
                else{
                  props.history.push("/");
                }
                
              } else {
                setFormErrorMessage('!!!Check out E-mail address or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('!!!Check out E-mail address or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (

          <div className="container">
            <div className = "w-50 mx-auto shadow p-5" style={{ top: '10%' }}>
            
            <center><Title level={2}>LOGIN TO ACCOUNT</Title></center>
            <form onSubmit={handleSubmit} style={{ width: '430px' }}>

              
            <Form.Item required >
                <Input
                  id="email"
                  placeholder="E-mail Address*"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )} </Form.Item>
             

              {/* color: 'rgba(0,0,0,.25) */}


              <Form.Item required >
                <Input
                  id="password"
                  placeholder="Password*"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}</Form.Item>
              

              {formErrorMessage && (
                <label ><p style={{ color: 'red', fontSize: '0.8rem', border: '2px solid', padding: '1rem', borderRadius: '5px' }}>{formErrorMessage}</p></label>
              )}

                <Form.Item>
                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                {/* <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                  forgot your password
                  </a> */}
                <div>
                  <button onSubmit={handleSubmit} htmlType="submit" className="btn btn-dark" style={{ minWidth: '100%' }} disabled={isSubmitting}>
                    <b>Sign In</b>
                </button>
                </div>
                Don't have an account? <a href="/register">Create account</a>
                </Form.Item>
            </form>
            
          </div>
          </div>
         
        );
      }}
    </Formik>
    </div>
    </Suspense>
    </>
    
  );
};

export default withRouter(LoginPage); 


