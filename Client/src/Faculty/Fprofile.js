// import React, { useEffect, useState } from 'react'
// import UserProfile from '../Components/UserProfile'
// import Logout from '../Components/Logout'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import Fsidebar from './Fsidebar'
// import { Button } from 'react-bootstrap'


// const Fprofile = () => {
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [empid,setEmpid]=useState("")
//   const [department,setDepartment]=useState("")
//   const [address,setAddress]=useState("")
//   const [attendance,setAttendance]=useState("")
//   // const [addmissiondate,setAddmissiondate]=useState("")
//   const navigate =useNavigate()

// axios.defaults.withCredentials=true;
//   useEffect(()=>{
//     axios.get('http://localhost:9000/fget')
//     .then(res=>{
//       if(res.data.valid){
//         setName(res.data.name)
//         setEmail(res.data.email)
//         setEmpid(res.data.empid)
//         setDepartment(res.data.department)
//         setAddress(res.data.address)
//       } else{
//         navigate('/login')
//       }
//     })
//     .catch(err=>console.log(err))
//   },[])
//   return (
//     <div style={{display:"flex"}}>
//       <Fsidebar/>
//       <h1 style={{paddingLeft:"50px"}}>Profile Card</h1>
//        <div className="student-profile" style={{position:"fixed"}}>
//        <h1 > name:  {name} </h1>  
//         <p> email: {email}  </p>
//         <p style={{paddingRight:"140px"}}> Empid: {empid}  </p>
//         <p style={{paddingRight:"88px"}}>Department: {department}  </p>
//         <p style={{paddingRight:"89px"}}>Address: {address}  </p>
//         <p style={{paddingRight:"80px"}}>Attendance:{attendance}  </p>
//         {/* <p style={{paddingRight:"92px"}}>Admission Date:{addmissiondate}</p>  <br/> */}
//         <Button>EDIT</Button>
//        </div>
 
//     </div>
//   )
// }

// export default Fprofile


import React, { useEffect, useState } from 'react'
import UserProfile from '../Components/UserProfile'
import Logout from '../Components/Logout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Student/studentprof.css'
import { Button } from 'react-bootstrap'
import Fsidebar from './Fsidebar'


const Fprofile = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [empid,setEmpid]=useState("")
  const [year,setYear]=useState("")
  const [department,setDepartment]=useState("")
  const [address,setAddress]=useState("")
  const [attendance,setAttendance]=useState("")
  const [addmissiondate,setAddmissiondate]=useState("")
  const navigate =useNavigate()

axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:9000/getfac')
    .then(res=>{
      if(res.data.valid){
        setName(res.data.name)
        setEmail(res.data.email)
        setEmpid(res.data.empid)
        setDepartment(res.data.department)
        setAddress(res.data.address)
        setAttendance(res.data.attendance)
      } else{
        navigate('/flogin')
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div style={{display:"flex"}}>
       <Fsidebar/>
       <section>
      <div >
      <h1 style={{paddingLeft:"520px",}}>Profile Card</h1>
     
       <div className="student-profile" style={{position:"fixed",marginTop:"50px"}}>
       <h1 > name:  {name} </h1>  
        <p> email: {email}  </p>
        <p style={{paddingRight:"140px"}}> Emp id: {empid}  </p>
        <p style={{paddingRight:"88px"}}>Department: {department}  </p>
        <p style={{paddingRight:"89px"}}>Address: {address}  </p>
        <p style={{paddingRight:"80px"}}>Attendance:{attendance}  </p>
        <Button>EDIT</Button>
       </div>
    
       </div>
       </section>
    </div>
  )
}

export default Fprofile