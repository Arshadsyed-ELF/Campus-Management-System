import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Sidebar from '../Admin/Sidebar'
import { Button } from 'react-bootstrap'

const Fupdate = () => {
   

      const [name,setName]=useState()
      const [department,setDepartment]=useState()
      const [email,setEmail]=useState()
      const [address,setAddress]=useState()
      let {id}=useParams()
      console.log(id)
      let navigate=useNavigate()
      console.log(id)
     
      useEffect(()=>{
        axios.get('http://localhost:9000/getfac/'+ id)
         .then((resp)=>{
        console.log(resp)
        setName(resp.data.name)
        setDepartment(resp.data.department)
        setEmail(resp.data.email)
        setAddress(resp.data.address)
           })
         .catch(()=>{
           console.log(" DIDNT GET")
         })
         },[])
    
    
         
        let formHandle=(e)=>{
          e.preventDefault();
          let payload = { name,email,department,address }
              axios.put(`http://localhost:9000/fupdate/${id}`,payload)
              .then((res)=>{
                  console.log(res)
            alert("data updated successfully")
              })
              navigate("/mfaculty")
          }
  return (
    <div style={{display:"flex"}}>
        <Sidebar/> 
     <div style={{padding:"50px"}}>     
<form onSubmit={formHandle}>
      

      <input placeholder=" Faculty Name" onChange={(e)=> setName(e.target.value)}  value={name}/><br/> <br/>
        
      <input placeholder=" Faculty Department"   onChange={(e)=> setDepartment(e.target.value)}  value={department} /><br/> <br/>
     
      <input placeholder="Faculty Email"   onChange={(e)=> setEmail(e.target.value)}  value={email} /><br/> <br/>
     
      <input placeholder=" Faculty Address" onChange={(e)=> setAddress(e.target.value)}  value={address}/><br/> <br/>
      
      <button  style={{border:"1 px solid",background:"blue",color:"white",height:"30px",width:"85px"}}>Update</button>
       

</form>
</div>  
    </div>
  )
}

export default Fupdate