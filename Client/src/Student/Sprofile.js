import React, { useEffect, useState } from 'react'
import Ssidebar from './Ssidebar'
import UserProfile from '../Components/UserProfile'
import Logout from '../Components/Logout'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import './studentprof.css'
import { Button } from 'react-bootstrap'



const Sprofile = () => {
  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [rollno,setRollno]=useState("")
  const [year,setYear]=useState("")
  const [department,setDepartment]=useState("")
  const [address,setAddress]=useState("")
  const [attendance,setAttendance]=useState("")
  const [addmissiondate,setAddmissiondate]=useState("")
  const navigate =useNavigate()

axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:9000/getuser')
    .then(res=>{
      if(res.data.valid){
        setId(res.data.id)
        setName(res.data.name)
        setEmail(res.data.email)
        setRollno(res.data.rollno)
        setYear(res.data.year)
        setDepartment(res.data.department)
        setAddress(res.data.address)
        setAttendance(res.data.attendance)
        setAddmissiondate(res.data.addmissiondate)
      } else{
        navigate('/login')
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div style={{display:"flex"}}>
        <Ssidebar/>
        <section>
      <div >
      <h1 style={{paddingLeft:"520px",}}>Profile Card</h1>
      <div className="student-profile" style={{position:"fixed",marginTop:"50px"}}>
       <h1 > name:  {name} </h1>  
        <p> email: {email}  </p>
        <p style={{paddingRight:"140px"}}> Roll no: {rollno}  </p>
        <p style={{paddingRight:"175px"}}>Year: {year}  </p>
        <p style={{paddingRight:"88px"}}>Department: {department}  </p>
        <p style={{paddingRight:"89px"}}>Address: {address}  </p>
        <p style={{paddingRight:"80px"}}>Attendance:{attendance}  </p>
        {/* <p style={{paddingRight:"92px"}}>Admission Date:{addmissiondate}</p>  <br/> */}
       
        <Button  ><Link to={`/sprofileedit/${id}`} style={{textDecoration:"none",color:"white"}}>EDIT</Link></Button> <span></span> <span></span> <span></span>

       </div>
       </div>
    </section>
         
    
    </div>
  )
}

export default Sprofile