import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <div >
      
          <Navbar expand="lg" style={{height:"50px"}} >
      <Container >
        <Navbar.Brand href="#home" ><Link to="/about" style={{textDecoration:"none",color:'black'}}>College-Management</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{paddingLeft:"1000px"}}>
            <NavDropdown title="Login" id="basic-nav-dropdown" >
              <NavDropdown.Item  >
                <Link to="/login" style={{textDecoration:"none"}}>Student </Link>
              </NavDropdown.Item>
              <NavDropdown.Item  >
             <Link to="/flogin" style={{textDecoration:"none"}}>Faculty</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/alogin" style={{textDecoration:"none"}}>Admin</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default LoginNav