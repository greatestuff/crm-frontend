import React from 'react'
import { Breadcrumb,Navbar, Nav } from 'react-bootstrap'
import {Link} from "react-router-dom"

export const PageBreadcrumb = ({page}) => {
  return (
    <Breadcrumb>
      {/*<Nav.Link  as={Link} to="/Dashboard">Dashboard</Nav.Link> */}
        <Breadcrumb.Item href="/"><Nav.Link  as={Link} to="/dashboard">Home</Nav.Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}
