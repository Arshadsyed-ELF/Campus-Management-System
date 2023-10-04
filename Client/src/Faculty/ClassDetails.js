import React from 'react'
import Fsidebar from './Fsidebar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';

const ClassDetails = () => {
  const [classrooms, setClassrooms] = useState('');
  let {id}=useParams()
  console.log(id)
  const navigate =useNavigate()
  
    useEffect(()=>{
      axios.get('http://localhost:9000/getclassroom/'+ id)
       .then((resp)=>{
      console.log(resp )
      setClassrooms(resp.data)
         })
       .catch(()=>{
         console.log(" DIDNT GET")
       })
       },[])
  return (
    <div style={{display:"flex"}}>
    <Fsidebar/>
    <div className="classroom-info">
   <h1>Welcome to {classrooms.subject} By {classrooms.name}</h1> <br/>
   <p style={{color:"black"}}>{classrooms.description}</p>


  <Button onClick={()=>navigate('/classroom')}>Leave</Button>
   </div>
    </div>
  )
}

export default ClassDetails
