import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
import {Container, Row, Col, Button} from "react-bootstrap"
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'

import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";

export const TicketLists = () => {

    const dispatch = useDispatch()
    const [str, setStr] = useState("");
    const [dispTickets, setDispTickets] = useState(tickets);

    useEffect(() => {
        dispatch(fetchAllTickets())
    }, [str,dispatch])


    const searchTickets = (sttr) =>
    {
        const displayTickets = tickets.filter((row)=>row.subject.toLowerCase().includes(sttr.toLowerCase()))
        setDispTickets(displayTickets)
        console.log(displayTickets)
    }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Tickets Lists" />
            </Col>
        </Row>

        <Row className="mt-4">
            <Col>
                <Link  as={Link} to="/add-ticket"><Button variant="info">Add New Ticket</Button ></Link>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }} className="text-right">
                <SearchForm  />
            </Col>
        </Row>
        <hr/> 
        <Row>
            <Col>
                <TicketTable /> 
            </Col>
        </Row>

    </Container>
  )
}
