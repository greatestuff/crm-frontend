import React from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import PropTypes from "prop-types"
import "./AddTicketForm.style.css"

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt }) => {
  return (
    <div className="mt-3 add-new-ticket bg-light">
      <h1 className='text-info text-center mb-3'>Add New Ticket</h1>
                <Form  autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                          <Form.Control onChange={handleOnChange} type="text" name="subject" placeholder='Enter subject'  value={frmDt.subject} />
                        </Col>
                    </Form.Group> 

                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm={3}>Issue found:</Form.Label>
                        <Col sm={9}>
                          <Form.Control onChange={handleOnChange} type="date" name="issueDate"  value={frmDt.issueDate}/>
                        </Col>
                    </Form.Group>  

                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm={3}>Details</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="textarea" onChange={handleOnChange} name="detail"  value={frmDt.detail}/>
                        </Col>
                    </Form.Group> 

                    <Button className="submitbtn" type="submit"  variant="info">Submit</Button>
                </Form>
    </div>
  )
}

AddTicketForm.propTypes = 
{
  handleOnSubmit : PropTypes.func.isRequired,
  handleOnChange : PropTypes.func.isRequired,
  frmDt : PropTypes.object.isRequired
}