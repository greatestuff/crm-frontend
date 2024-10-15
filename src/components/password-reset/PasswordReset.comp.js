import React from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './PasswordReset.comp.css'
import PropTypes from 'prop-types'; 

export const PasswordResetForm = ({handleOnChange ,handleOnResetSubmit, formSwitcher , email }) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-center text-info">Reset Password!</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control onChange={handleOnChange} type="email" name="email" placeholder='Enter Email'  value={email} />
                    </Form.Group> 

                    <Button className="submitbtn" type="submit" >Reset</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!"  onClick={()=>formSwitcher("Login")}>Login now!</a>
            </Col>
        </Row>
    </Container>
  )
}

PasswordResetForm.propTypes = 
{
    handleOnChange : PropTypes.func.isRequired,
    handleOnResetSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired
}