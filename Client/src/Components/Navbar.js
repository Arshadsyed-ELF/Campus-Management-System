// import React from 'react'
// import { useState, useEffect } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {  BrowserRouter, Link, Route,Routes } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import Login from './Login';

// const NavBar = () => {
//     const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (

//     <div>
       
//          <BrowserRouter>
//          <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id='navs' >
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//             <Nav.Link href="#department" className={activeLink === 'department' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('department')}>Departments</Nav.Link>
//             <Nav.Link href="#faculty" className={activeLink === 'faculty' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faculty')}>Faculty</Nav.Link>
//             <Nav.Link href="#alumni" className={activeLink === 'alumni' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('alumni')}>Alumni</Nav.Link>
//             <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
//             {/* <Nav.Link href="#login" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link> */}
//             <Nav.Link><Link to='/login'>Login</Link></Nav.Link>       
         
//           </Nav>
//         </Navbar.Collapse>
//         <Navbar.Brand href="#home">College-Management</Navbar.Brand>
//         </Container>
//     </Navbar>
//     <Routes>
//     <Route path='/login' element={<Login/>} />
//     </Routes>
//          </BrowserRouter>
   
//     </div>
//   )
// }

// export default NavBar

import { useState, useEffect } from "react";
import { Navbar, Nav, Container,Dropdown ,NavDropdown} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link} from "react-router-dom";
import Login from "./Login";

 const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
        <section id="sec">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="#home">College-Management</Navbar.Brand>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} style={{paddingTop:"10px"}}>Home</Nav.Link>
             <Nav.Link href="#department" className={activeLink === 'department' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('department')} style={{paddingTop:"10px"}}>Departments</Nav.Link>
             <Nav.Link href="#faculty" className={activeLink === 'faculty' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faculty')} style={{paddingTop:"10px"}}>Faculty</Nav.Link>
             <Nav.Link href="#alumni" className={activeLink === 'alumni' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('alumni')} style={{paddingTop:"10px"}}>Alumni</Nav.Link>
             <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} style={{paddingTop:"10px"}}>About</Nav.Link>
             <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>
             <Dropdown>

     <Dropdown.Toggle variant="black"  id="dropdown-basic" style={{border:"none"}}>
     <strong>Login</strong>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
      <Link to="/login" style={{textDecoration:"none",color:"black"}}> Student</Link>   
        </Dropdown.Item>
        <Dropdown.Item >
         <Link to="/flogin" style={{textDecoration:"none",color:"black"}}> Faculty</Link>
        </Dropdown.Item>
        <Dropdown.Item >
         <Link to="/alogin" style={{textDecoration:"none",color:"black"}}> Admin</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav.Link>
             {/* <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}> <Link to="/login" style={{textDecoration:"none",color:"black"}}> Student</Link></Nav.Link>
             <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}> <Link to="/login" style={{textDecoration:"none",color:"black"}}> Admin</Link></Nav.Link>
             <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}> <Link to="/login" style={{textDecoration:"none",color:"black"}}> Faculty</Link></Nav.Link> */}
             </Nav>

            <span className="navbar-text">
              {/* <HashLink to='#contact'>
                <button className="vvd"><span>Contact Us</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
     
    //  </Router> 
    
  )
}
export default NavBar