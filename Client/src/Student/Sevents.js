// components/GetClassroom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../Faculty/getclass.css';
import { Button } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ssidebar from './Ssidebar';

const Sevents = () => {
  const [classrooms, setClassrooms] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const response = await axios.get('http://localhost:9000/getevents'); // Define the correct API endpoint
        setClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    }
    fetchClassrooms();
  }, []);

  let deleteData=(_id)=>{
    axios.delete(`http://localhost:9000/eventdelete/${_id}`)
    window.location.assign("/sevents")
    alert("event is deleted")
  }

 
 

  return (
    <div style={{display:"flex" }}> 
    <div style={{position:"fixed"}}>
       <Ssidebar/>
       </div>
      <div><br/>
      {/* <Button onClick={()=>navigate('/createevent')} style={{marginLeft:"220px"}}>Create Event</Button> */}
        <section style={{marginLeft:"220px"}} >
        <div className="container mt-5" >
      <h2 className="mb-4">Events</h2>
      <div className="grid-container" style={{width:"350px"}}>
        {classrooms.map((classroom) => ( 
          <div key={classroom._id} className="grid-item">
            <div className="classroom-info">  
              <h5><strong style={{color:"black"}}>Event name:</strong>{classroom.name}</h5>
              <p ><strong style={{color:"black"}}>Date:</strong>{classroom.subject}</p>
              <p><strong style={{color:"black"}}>Description:</strong>{classroom.description}</p>
              {/* <Button variant="primary" onClick={()=>{deleteData(classroom._id)}}style={{marginLeft:"0px"}}>Participate</Button> */}
              {/* <Button variant="danger" onClick={()=>{deleteData(classroom._id)}}style={{marginLeft:"50px"}}>delete</Button> */}
              {/* <Button ><Link to={`/sclassroom/${classroom._id}`} style={{color:"white",textDecoration:"none"}}>Join</Link></Button> */}
            </div>
          </div>
        ))}
      </div>
    </div>

    </section>
    </div>
    </div>
  );
};

export default Sevents;
