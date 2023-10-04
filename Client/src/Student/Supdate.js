import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Sidebar from '../Admin/Sidebar'
import { Button } from 'react-bootstrap'

const Supdate = () => {
      const [name,setName]=useState()
      const [year,setYear]=useState()
      const [department,setDepartment]=useState()
      const [email,setEmail]=useState()
      const [address,setAddress]=useState()
      let {id}=useParams()
      console.log(id)
      let navigate=useNavigate()
      console.log(id)
    
    
    
      useEffect(()=>{
        axios.get('http://localhost:9000/getuser/'+ id)
         .then((resp)=>{
        console.log(resp)
        setName(resp.data.name)
        setEmail(resp.data.email)
        setYear(resp.data.year)
        setDepartment(resp.data.department)
        setAddress(resp.data.address)
          })
         .catch(()=>{
           console.log(" DIDNT GET")
         })
         },[])
    
    
         
        let formHandle=(e)=>{
          e.preventDefault();
          let payload = { name,email,year,department,address }
              axios.put(`http://localhost:9000/supdate/${id}`,payload)
              .then((res)=>{
                  console.log(res)
            alert("data updated successfully")
              })
              navigate("/mstudent")
          }
  return (
    <div style={{display:"flex"}}>
        <Sidebar/> 
     <div style={{padding:"50px"}}>     
<form onSubmit={formHandle}>
      
     <label>Name</label> <br/>
      <input placeholder=" student Name" onChange={(e)=> setName(e.target.value)}  value={name}/><br/> 
      <label>Year</label> <br/>
      <input placeholder=" Student Year" onChange={(e)=> setYear(e.target.value)}  value={year} /><br/>
      <label>Department</label> <br/>
      <input placeholder=" Student Department" onChange={(e)=> setDepartment(e.target.value)}  value={department} /> <br/>
      <label>Email</label> <br/>
      <input placeholder="Student Email" onChange={(e)=> setEmail(e.target.value)}   value={email} /><br/> 
      <label>Address</label> <br/>
      <input placeholder=" Student Address" onChange={(e)=> setAddress(e.target.value)} value={address}/><br/> <br/>
      
      <button  style={{border:"1 px solid",background:"blue",color:"white",height:"30px",width:"85px"}}>Update</button>

</form>
</div>  
    </div>
  )
}

export default Supdate