import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div style={{padding:"20px", justifyContent:"space-evenly",display:"flex"}}>
        <Link to="/login" style={{textDecoration:"none",color:"red",fontSize:"30px"}}><strong>Student Login</strong></Link>
        <Link to="/alogin" style={{textDecoration:"none",color:"red",fontSize:"30px"}}><strong>Admin Login</strong></Link>
        <Link to="/flogin" style={{textDecoration:"none",color:"red",fontSize:"30px"}}><strong>Faculty Login</strong></Link>
    </div>
  )
}

export default Links