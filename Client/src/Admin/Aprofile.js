import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'


const Aprofile = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const navigate =useNavigate()

axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:9000/getadmin')
    .then(res=>{
      if(res.data.valid){
        setName(res.data.name)
        setEmail(res.data.email)
        setAddress(res.data.address)
      } else{
        navigate('/login')
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
       <div>
       <h1 style={{color:"purple"}}> Hii {name} !!</h1>  
        {/* <h1 style={{color:""}}> email: {email}  </h1> */}
       </div>
 
    </div>
  )
}

export default Aprofile