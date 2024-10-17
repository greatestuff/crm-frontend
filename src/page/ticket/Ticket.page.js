import {React} from 'react'
import {Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
import { useState,useEffect } from "react"

const ticket = tickets[0]

export const Ticket = () => {

    const [message, setMessage] = useState("")

    useEffect(() => { }, [message])
    
    const handleOnSubmit = (e) => {
        alert("Form Submited !")
    }

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket"/>
            </Col>  
        </Row>  
        <Row>
            <Col className="fw-bold text-secondary">
                <div className="subject">Subject : {ticket.subject}</div>
                <div className="date">Ticket Open : {ticket.addedAt}</div>
                <div className="status">Status : {ticket.status}</div>
            </Col>  
            <Col className="text-end">
                <Button variant="outline-info" >Close Ticket</Button>
            </Col>  
        </Row>  


        <Row className='mt-4'>
            <Col>
                <MessageHistory msg={ticket.history} />
            </Col>  
        </Row>  
        <hr/> 
        <Row className='mt-4'>
            <Col>
                 <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
            </Col>  
        </Row>  

    </Container>
  )
}
