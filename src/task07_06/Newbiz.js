import React from 'react'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Newbiz.css'

export default function Newbiz() {
    return (
        <div>
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"><img src="https://bootstrapmade.com/demo/templates/NewBiz/assets/img/logo.png" width="160px"></img></Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <div class="headsty">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#link">Services</Nav.Link>
                                    <Nav.Link href="#link">Portfolio</Nav.Link>
                                    <Nav.Link href="#link">Team</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Drop down 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Drop down 2
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Drop down 3</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Drop down 4
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#link">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
