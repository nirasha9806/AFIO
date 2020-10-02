import React, { Suspense } from "react";
//import { Button,Form } from 'react-bootstrap';
import { registerUser } from "../../_actions/user_actions";
import { Formik, validateYupSchema} from 'formik';
import * as Yup from 'yup';
import { Form, Input, Checkbox, Typography, Menu} from 'antd';
import { useDispatch } from "react-redux";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
const SubMenu = Menu.SubMenu;

const { Title } = Typography;

function RegisterPage(props) {
  const dispatch = useDispatch();

  return (

    <>
    <Suspense fallback={(<div>Loading...</div>)}>
    <Navbar />
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        men: '',
        women: '',
        adults: '',
        teenagers: '',
        kids: '',

      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            men: values.men,
            women: values.women,
            adults: values.adults,
            teenagers: values.teenagers,
            kids: values.kids
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

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
            <div className = "w-50 mx-auto shadow p-5">
            <center><Title level={2}>CREATE ACCOUNT</Title></center>
            <form onSubmit={handleSubmit} style={{ width: '430px' }}>
            {/* <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} > */}

              <Form.Item required>
                <Input
                  id="firstName"
                  placeholder="First name*"
                  type="name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? 'name-input error' : 'name-input'
                  }
                />
                {errors.firstName && touched.firstName && (
                  <div className="input-feedback">{errors.firstName}</div>
                )}
                </Form.Item>
              
                <Form.Item>
                <Input
                  id="lastName"
                  placeholder="Last name*"
                  type="name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'name-input error' : 'name-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item required hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="E-mail address*"
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
                )}
              </Form.Item>

              <Form.Item required hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
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
                )}
              </Form.Item>

              <Form.Item required hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm password*"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item>
                <h6 style={{ color: 'grey'}}>-----------Enter Your Family Details(Not required)-----------</h6>

              <Checkbox 
                    id="men" 
                    name="men"  
                    type="checkbox"  
                    value={values.men}
                    class="filled-in"
                    onChange={handleChange}>Men</Checkbox>

              <Checkbox 
                    id="women" 
                    name="women"  
                    type="checkbox"  
                    value={values.Women}
                    onChange={handleChange}>Women</Checkbox>

              <Checkbox 
                    id="adults" 
                    name="adults"  
                    type="checkbox"  
                    value={values.adults}
                    onChange={handleChange}>Adults</Checkbox>


              <Checkbox id="teens"
                    name="teenagers"  
                    type="checkbox"  
                    value={values.Teenagers}
                    onChange={handleChange}>Teenagers</Checkbox>

              <Checkbox id="kids"
                    name="kids"  
                    type="checkbox"  
                    value={values.Kids}
                    onChange={handleChange} >Kids</Checkbox>

              </Form.Item> 

              <Form.Item>
                <button onClick={handleSubmit} type="primary" className="btn btn-dark" style={{ minWidth: '100%' }} disabled={isSubmitting}>
                  <b>Sign Up</b>
                </button>
                Login to your account.. <a href="/login">Login</a>
              </Form.Item>

            </form>
            </div>
          </div>
        );
      }}
    </Formik>

    </div>
    </Suspense>
    <Footer/>
    </>

  );
};

export default RegisterPage
