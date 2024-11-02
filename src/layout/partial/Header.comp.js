import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import logo from "../../assets/img/logo.png"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"
//import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
  const navigate = useNavigate()
  const logMeOut = () =>
  {
    sessionStorage.removeItem('accessJWT')
    navigate("/")
  }

  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
       <Navbar.Brand><img src={logo} alt="logo" width="50px" height="50px"/> </Navbar.Brand> 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
                {/* <Link to="/Dashboard">Dashboard</Link>
                <Link to="/tickets">Tickets</Link>
                <Link to="">Logout</Link> */}

                <Nav.Link  as={Link} to="/Dashboard">Dashboard</Nav.Link>
                <Nav.Link  as={Link} to="/tickets">Tickets</Nav.Link>
                <Nav.Link  as={Link} to="/" onClick={logMeOut} >Logout</Nav.Link>


                {/* <Nav.Link >Dashboard</Nav.Link>
                <Nav.Link >Tickets</Nav.Link>
                <Nav.Link href="">Logout</Nav.Link> */}
                
            </Nav>  
       </Navbar.Collapse>
    </Navbar>
  )
}
