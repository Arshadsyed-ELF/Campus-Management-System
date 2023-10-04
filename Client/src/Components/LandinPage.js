import React from 'react'
import NavBar from './Navbar'
import Home from './Home'
import Departments from './Departments'
import Faculty from './Faculty'
import Alumni from './Alumni'
import Contact from './Contact'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
     <NavBar />
     <Home />
     <Departments /> <br/> <br/>
     <Faculty/> <br/> <br/> <br/> <br/> <br/> 
     <Alumni /> <br/> <br/>
     <Contact/>
     <Footer />
    </div>
  )
}

export default LandingPage