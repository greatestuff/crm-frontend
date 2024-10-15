import React from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './Login.comp.css'
import PropTypes from 'prop-types'; 

export const LoginForm = ({handleOnChange ,handleOnLoginSubmit, formSwitcher, email , password}) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-center text-info">Client Login</h1>
                <hr />
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
    handleOnChange : PropTypes.func.isRequired,
    handleOnLoginSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired
}