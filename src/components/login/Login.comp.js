import React, {useState, useEffect} from "react"
import {Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap'
import './Login.comp.css'
import PropTypes from 'prop-types'; 
import { useDispatch, useSelector } from "react-redux";
import { loginPending, loginSuccess, loginFail } from './loginSlice'; 
import { userLogin } from "../../../src/api/userApi";

import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../page/dashboard/userActions";

export const LoginForm = ({ formSwitcher }) => {

    const {isLoading, isAuth, error} =useSelector(state => state.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => { 
      if(sessionStorage.getItem('sessionJWT'))
      {
        navigate("/dashboard")
      }
    }, [navigate])
    
    
    const [email, setEmail] = useState('e@e.com');
    const [password, setPassword] = useState('password1');

  
    const handleOnChange = (e) => 
        {
            const {name, value} = e.target
  
            switch(name)
            {
              case "email" : 
                setEmail(value)
                break;
              case "password" : 
                setPassword(value)
                break;
            }
            
        }
  
    const handleOnLoginSubmit = async(e) =>
    {
      e.preventDefault();
      if(!email || !password)
      {
        return alert("Please fill up all the Form !!")
      }
  
      //TODO : Submit info to server
      dispatch(loginPending())

      try {
        const isAuth = await userLogin({email, password})
        if(isAuth.status === "error")
        {
            console.log(isAuth)
            return dispatch(loginFail(isAuth.message))
        }

        dispatch(loginSuccess())
        dispatch(getUserProfile())
        navigate("/dashboard")

        console.log(isAuth)
      } catch (error) {
        dispatch(loginFail())
      }
  
    }


  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-center text-info">Client Login</h1>
                <hr />
                {error && <Alert variant="danger" >{error}</Alert>}
                <Form autoComplete="off" onSubmit={handleOnLoginSubmit}>
                    <Form.Group>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control onChange={handleOnChange} type="email" name="email" placeholder='Enter Email'  value={email} />
                    </Form.Group> 

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleOnChange} type="password" name="password" placeholder='Password'  value={password}/>
                    </Form.Group>  

                    <Button className="submitbtn" type="submit" >Login</Button>
                    {isLoading && <Spinner variant="primary" animation="border" />}

                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={()=>formSwitcher("Reset")}>Forgot Password!</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = 
{
    formSwitcher : PropTypes.func.isRequired
}