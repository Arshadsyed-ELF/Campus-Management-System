import React, { useEffect, useState } from 'react'
import Ssidebar from './Ssidebar'
import UserProfile from '../Components/UserProfile'
import Logout from '../Components/Logout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './studentprof.css'
import { Button } from 'react-bootstrap'


const Sdashboard = () => {
  const [name,setName]=useState("")
  const navigate =useNavigate()

axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:9000/getuser')
    .then(res=>{
      if(res.data.valid){
        setName(res.data.name)
      } else{
        navigate('/login')
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div style={{display:"flex"}}>
        <Ssidebar/>
     <h1>Welcome {name} !!</h1>  
    </div>
  )
}

export default Sdashboard