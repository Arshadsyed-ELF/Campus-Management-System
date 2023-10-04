import React, { useEffect, useState } from 'react'
import UserProfile from '../Components/UserProfile'
import Logout from '../Components/Logout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Student/studentprof.css'
import { Button } from 'react-bootstrap'
import Fsidebar from './Fsidebar'


const Fdash = () => {
  const [name,setName]=useState("")
  const navigate =useNavigate()

axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:9000/getfac')
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
       <Fsidebar/>
     <h1>Welcome {name} !!</h1>  
    </div>
  )
}

export default Fdash