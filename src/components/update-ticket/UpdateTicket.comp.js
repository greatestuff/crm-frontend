import React from 'react'
import {Form, Button} from "react-bootstrap"
import PropTypes from 'prop-types'

export const UpdateTicket = ({msg, handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label> <br/> 
        <Form.Text>Please Reply Here:</Form.Text> 
        <Form.Control 
        name="detail" 
        value={msg} 
        onChange={handleOnChange} 
        as="textarea" 
        row="5" />
        <div className='text-end mt-3'>
            <Button variant="info" type="submit">Replay</Button>
        </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
    msg : PropTypes.string.isRequired,
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit :  PropTypes.func.isRequired
}