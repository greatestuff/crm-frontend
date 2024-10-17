import {React,useState} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import {AddTicketForm} from '../../components/add-ticket-form/AddTicketForm.comp'


const initialFormData = 
{
    subject : "",
    issueDate: "",
    detail: "",
}
export const AddTicket = () => {

    const [formData, setformData] = useState(initialFormData)

    const handleOnChange = (e) => {
        const {name,value} = e.target
        setformData({
            ...formData,
            [name]: value,
        })

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const {name,value} = e.target
    }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket" />
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm frmDt={formData} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>

    </Container>
  )
}
