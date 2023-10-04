// components/GetClassroom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Faculty/getclass.css';
import { Button } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Ssidebar from './Ssidebar';

const Slabs = () => {
  const [classrooms, setClassrooms] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const response = await axios.get('http://localhost:9000/getlab'); // Define the correct API endpoint
        setClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    }
    fetchClassrooms();
  }, []);

 
  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/labdelete/${_id}`)
    window.location.assign("/alab")
    alert("class is deleted")
  }

  return (
    <div style={{display:"flex"}}>
  <div style={{position:'fixed'}}>
    <Ssidebar/> 
    </div>
    <div style={{marginLeft:"200px",marginRight:"200px"}}>  

        
        <div className="container mt-5">   
      <h2 className="mb-4">Labs </h2>
      <div className="grid-container">
        {classrooms.map((classroom) => ( 
          <div key={classroom._id} className="grid-item">
            <div className="classroom-info">  
              <h5><strong style={{color:"black"}}>name:</strong>{classroom.name}</h5>
              <p><strong style={{color:"black"}}>Subject:</strong>{classroom.subject}</p>
              <p><strong style={{color:"black"}}>sub Code:</strong>{classroom.code}</p>
              <p><strong style={{color:"black"}}>Description:</strong>{classroom.description}</p>
              <Button ><Link to={`/slabget/${classroom._id}`} style={{color:"white",textDecoration:"none"}}>join</Link></Button>
             
              {/* <Button ><Link to={'/slab'} style={{color:"white",textDecoration:"none"}}>Join</Link></Button> */}
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Slabs;
